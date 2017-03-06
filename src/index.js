require('./image_viewer')

const defaults  = require('lodash/defaults')

const res = defaults({ 'a': 1, 'b': 3 }, { 'a': 3, 'b': 3, 'c': 4 });

console.log(res)