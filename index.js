#!/usr/bin/env node
'use strict'

var mri = require('mri')

var argv = mri(process.argv.slice(2), {
  boolean: ['help', 'h', 'print-details']
})

if (argv.help || argv.h) {
  console.log(`\
Usage:
  bonjour-browser [--print-details] [name]
Example:
  bonjour-browser my-apple-tv
`)
  process.exit(0)
}

var bonjour = require('bonjour')()

var name = argv._[2]
var printDetails = !!argv['print-details']

var found = Object.create(null)
bonjour.find({ type: name }, function (service) {
  if (service.fqdn in found) return
  found[service.fqdn] = true
  console.log(printDetails ? service : service.fqdn)
})
