var test = require('tape')
var epsg = require('../')
var proj = require('proj4')

test('convert', function (t) {
	var longlat = proj(epsg[32605], epsg[4326], [352500,6630000])
	t.deepEqual(longlat, [ -155.62757614534797, 59.781490186078884 ])
	t.end()
})
