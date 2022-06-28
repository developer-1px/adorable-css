import { cac } from 'cac'
import { build } from './build'

export const VERSION_CLI = '0.1.0' as const

const cli = cac('adorable-css')

cli
  .command('[root]', 'build for production')
  .alias('build')
  .option('-o, --out <dir>', '[string] output Directory', {
    default: 'adorable.css',
  })
  .option('-w, --watch', '[boolean] rebuilds when modules have changed on disk', {
    default: false,
  })
  .option('-m, --minify', '[boolean] minify output css', {
    default: false,
  })
  .option('-v, --verbose', '[boolean] verbose build output', {
    default: false,
  })
  .option('--no-reset', '[boolean] exclude reset css from output') // 접미사 no-가 붙은 옵션은 기본값 true 자돌 설정
  .action(build)

cli.help()
cli.version(VERSION_CLI)

if (require.main === module) {
  cli.parse(process.argv, { run: true })
}

export default cli
