// This exists because `Object.create(null)` is absurdly slow compared
// to `new EmptyObject()`. In either case, you want a null prototype
// when you're treating the object instances as arbitrary dictionaries
// and don't want your keys colliding with build-in methods on the
// default object prototype.
function BlankObject() {}
BlankObject.prototype = Object.create(null, {
  constructor: {
    value: undefined,
    enumerable: false,
    writable: true
  }
});
module.exports = BlankObject;
