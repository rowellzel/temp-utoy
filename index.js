const _ = require('lodash')

const items = [12, [15, [11]]]
const newItems = _.flattenDeep(items);
console.log(newItems);