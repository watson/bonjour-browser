#!/usr/bin/env node
'use strict'

var mri = require('mri')

var argv = mri(process.argv.slice(2), {
  boolean: ['help', 'h']
})

if (argv.help || argv.h) {
  process.stdout.write(`\
Usage:
  bonjour-browser [name]
Example:
  bonjour-browser my-apple-tv
`)
  process.exit(0)
}

var bonjour = require('bonjour')()

var name = argv._[2]
var found = Object.create(null)

bonjour.find({ type: name }, function (service) {
  if (service.fqdn in found) return
  found[service.fqdn] = true
  console.log(service.fqdn)
})
