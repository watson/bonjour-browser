#!/usr/bin/env node
'use strict'

var bonjour = require('bonjour')()

var name = process.argv[2]
var found = {}

bonjour.find({ type: name }, function (service) {
  if (service.fqdn in found) return
  found[service.fqdn] = true
  console.log(service.fqdn)
})
