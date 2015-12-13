var epsg = require('../')
var proj = require('proj4')

var longlat = proj(epsg[32605], epsg[4326], [352500,6630000])
console.log(longlat)
