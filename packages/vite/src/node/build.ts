import { generateCss, parseAtoms } from '../core/atomizer'
import { reset } from '../core/rules'
import chokidar from 'chokidar'
import fs from 'fs/promises'
import path from 'path'
import CleanCSS from 'clean-css'
import {glob} from 'glob'

type BuildOptions = {
  'out': string
  'watch': boolean
  'minify': boolean
  'verbose': boolean
  'reset': boolean
}
type BuildContext = {
  root: string
  resolver: (style: string) => void
} & BuildOptions
type EntryType = {
  [k: string]: string[]
}

const minifier = new CleanCSS()
const supportedExts = ['svelte', 'tsx', 'jsx', 'vue', 'mdx', 'svx', 'html']

export function build(root: string | undefined, options: BuildOptions) {
  const context: BuildContext = {
    ...resolveBuildContext(root, options),
    resolver: writeToFile,
  }

  if (!context.watch) {
    return buildOnce(context)
  } else {
    return watch(context)
  }

  async function writeToFile(style: string) {
    await fs.mkdir(path.dirname(context.out), { recursive: true })
    await fs.writeFile(context.out, style, { encoding: 'utf-8' })
  }
}

function resolveBuildContext(root: string | undefined, options: BuildOptions) {
  return {
    'root': root ?? '.',
    'out': options.out,
    'watch': options.watch,
    'minify': options.minify,
    'verbose': options.verbose,
    'reset': options['reset'],
  }
}

function buildOnce(context: BuildContext) {
  const pattern = path.join(context.root, '**', `?(${supportedExts.map((ext) => `*.${ext}`)})`)
  glob(pattern, async (_, matches) => {
    const entry = await filesToEntry(matches)
    const style = entryToStyle(context, entry)
    context.resolver(style)
  })
}

function watch(context: BuildContext) {
  let entry: EntryType = {}

  const notify = () => {
    context.resolver(entryToStyle(context, entry))
  }

  const pattern = path.join(context.root, '**', `*.{${supportedExts.join(',')}}`)
  const watcher = chokidar.watch(pattern, {
    ignored: (path) => path.includes('node_modules'),
  })

  watcher.on('change', async (filepath) => {
    log(context, `File changed : \x1b[1m${filepath}\x1b[0m`)
    entry[filepath] = await parseAtomsFromFile(filepath)
    notify()
  })

  watcher.on('ready', async () => {
    const watchedPaths = watcher.getWatched()

    log(context, 'Watching files under :', `\x1b[1m${context.root}\x1b[0m`)

    const files = Object.entries(watchedPaths).flatMap(([filepath, files]) => files.flatMap((file) => path.join(filepath, file)))
    entry = await filesToEntry(files)

    notify()
  })
}

async function filesToEntry(files: string[]) {
  const entry: EntryType = {}
  const promises = files.map(async (file) => {
    const atoms = await parseAtomsFromFile(file)
    if (atoms) {
      entry[file] = atoms
    }
  })
  await Promise.all(promises)
  return entry
}

async function parseAtomsFromFile(file: string) {
  if (!(await fs.lstat(file)).isFile()) {
    return undefined
  }
  const data = await fs.readFile(file, 'utf-8')
  return parseAtoms(data)
}

function entryToStyle(context: BuildContext, entry: EntryType): string {
  const allAtoms = Object.values(entry).flat()
  const styles = generateCss([...new Set(allAtoms)])
  const css = ((context['reset'] && styles) || [reset, ...styles]).join('\n')

  return (context.minify && minifier.minify(css).styles) || css
}

function log(context: BuildContext, ...msg: string[]) {
  if (context.verbose) {
    console.log('[adorable-css]', ...msg)
  }
}
