const REGEXP_STRING1 = /(?:"(?:[^"]|\\"])*")/gm
const REGEXP_STRING2 = /(?:'(?:[^']|\\'])*')/gm
const REGEXP_STRING3 = /(?:`(?:[^`]|\\`])*`)/gm

const trim = (a:string) => a.trim()
const findAll = (str:string, regex:RegExp, callback:Function) => String(str).replace(regex, (...args) => (callback(...args), args[0]))

export const parseAtoms = (code:string):string[] => {
  const atoms = Object.create(null)
  findAll(code, REGEXP_STRING1, (a:string) => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach(atom => atoms[atom] = atom))
  findAll(code, REGEXP_STRING2, (a:string) => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach(atom => atoms[atom] = atom))
  findAll(code, REGEXP_STRING3, (a:string) => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach(atom => atoms[atom] = atom))
  return Object.values(atoms)
}