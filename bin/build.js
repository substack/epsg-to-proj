#!/usr/bin/env node
var gdal = require('gdal')
var xtend = require('xtend')
var lookup = require('esri-proj-codes').lookup
var data = {
  geographic: require('esri-proj-codes/lib/geographic.json'),
  projected: require('esri-proj-codes/lib/projected.json'),
  vertical: require('esri-proj-codes/lib/vertical.json')
}
var codes = Object.keys(data)
  .map(function (key) { return data[key] })
  .reduce(xtend)

var results = {}
Object.keys(codes).forEach(function (code) {
  var r = lookup(code)
  if (!r) return
  var wkt = lookup(code).wkt
  var srs = gdal.SpatialReference.fromWKT(wkt)
  try { var p = srs.toProj4() }
  catch (err) { return }
  if (p) results[code] = p
})
console.log(JSON.stringify(results))
