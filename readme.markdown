# epsg-to-proj

convert an epsg code to a proj string

# example

``` js
var epsg = require('epsg-to-proj')
console.log(epsg[32605])
```

output:

```
+proj=utm +zone=5 +ellps=WGS84 +units=m +no_defs
```

## convert with proj

``` js
var epsg = require('epsg-to-proj')
var proj = require('proj4')

var longlat = proj(epsg[32605], epsg[4326], [352500,6630000])
console.log(longlat)
```

output:

```
[ -155.62757614534797, 59.781490186078884 ]
```

## command

```
$ epsg-to-proj 32605
```

# api

```
var epsg = require('epsg-to-proj')
```

## epsg[code]

Look up the proj string for an epsg `code`.

# usage

```
usage: epsg-to-proj CODE
```

# install

```
npm install epsg-to-proj
```

# license

BSD
