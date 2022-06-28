#!/usr/bin/env node

const cli = require('../dist/node/cli').default
cli.parse(process.argv, { run: true })
