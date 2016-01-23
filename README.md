# Bonjour Browser

A command line tool to browse for Bonjour/Zeroconf enabled services on
your local network.

[![Build status](https://travis-ci.org/watson/bonjour-browser.svg?branch=master)](https://travis-ci.org/watson/bonjour-browser)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

This software is written in Node.js and can be installed using the npm
package manager. Ensure that you've [downloaded](https://nodejs.org) and
installed Node.js before continueing.

Install the `bonjour` program globally:

```
npm install bonjour-browser -g
```

## Usage

```
bonjour [Service Name] [Subtype]
```

Run the `bonjour` command without any arguments to get a list of
available services no matter their Service Name.

```
$ bonjour
Intranet._http._tcp.local
HP LaserJet 4600._ipp._tcp.local
HP LaserJet 4600._http._tcp.local
Brother 5070N._ipp._tcp.local
Canon W2200._ipp._tcp.local
```

Add a Service Name as the 1st argument to limit your search to only
instanes of the given Servie Name:

```
$ bonjour ipp
Brother 5070N._ipp._tcp.local
Canon W2200._ipp._tcp.local
HP LaserJet 4600._ipp._tcp.local
```

## Gotcha

Due to the way the DNS-SD standard is defined, services run by clients
that do not respond to `_services._dns-sd._udp.<Domain>` queries will
not be discovered if you do not provide their Service Name as the 1st
argument.

## License

MIT
