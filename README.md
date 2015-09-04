# blank-object

Object.create(null) turns out to be quite slow to alloc in v8, but instead if
we inherit from an ancestory with `proto = create(null)` we have nearly
the same functionallity but with dramatically faster alloc.

```js
var BlankObject = require('blank-object');

var bo = new BlankObject();
```
