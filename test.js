var BlankObject = require('./index');
var assert = require('assert');

var blank = new BlankObject();

Object.getOwnPropertyNames(Object.prototype).forEach(function (propertyName) {
  assert.strictEqual(blank[propertyName], undefined);
  blank[propertyName] = 1
  assert.strictEqual(blank[propertyName], 1);
});
