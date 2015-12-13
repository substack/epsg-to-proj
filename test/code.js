var test = require('tape')
var epsg = require('../')

test('codes', function (t) {
	t.equal(epsg[32605], '+proj=utm +zone=5 +ellps=WGS84 +units=m +no_defs')
	t.equal(epsg[4326], '+proj=longlat +ellps=WGS84 +no_defs')
	t.end()
})
