#!/usr/bin/env node

const cli = require('../node/cli').default
cli.parse(process.argv, { run: true })
