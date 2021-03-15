const chokidar = require("chokidar");
const fs = require("fs");
const atomizer = require("./atomizer.js");
const atomizer = require("./atomizer");

const REGEXP_STRING1 = /(?:"[^"|\\"]*")/gm
const REGEXP_STRING2 = /(?:'[^"|\\']*')/gm
const REGEXP_STRING3 = /(?:`[^"|\\`]*`)/gm

const trim = (a) => a.trim()
const findAll = (str, regex, callback) => String(str).replace(regex, (...args) => (callback(...args), args[0]))

let watcher = chokidar.watch("./src/**/*.tsx");

// watcher.on("unlink", (path) => onChange(path));
watcher.on("add", (path) => onChange(path));
watcher.on("change", (path) => onChange(path));

let atoms = new Set();

let timer

const onChange = (path) => {
  let buffer = fs.readFileSync(path);
  let data = buffer.toString();
  
  findAll(data, REGEXP_STRING1, a => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach(atom => atoms.add(atom)));
  findAll(data, REGEXP_STRING2, a => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach(atom => atoms.add(atom)));
  findAll(data, REGEXP_STRING3, a => a.slice(1, -1).split(/\s+/).map(trim).filter(Boolean).forEach(atom => atoms.add(atom)));

  clearTimeout(timer);
  timer = setTimeout(() => {
    let styledata = atomizer.generateCss([...atoms]);
    fs.writeFileSync("./src/main.css", [...styledata].join("\n"));
  }, 50)
}
