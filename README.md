## pflow

Create flow of promised functions. Same as [lodash.flow](https://lodash.com/docs#flow) but handles promises.

## Installation

```
npm install pflow
```

## Usage

```javascript
var Promise = require('bluebird');
var flow = require('pflow');

function inc (x) {
	return Promise.resolve(x + 1);
}

var inc3 = flow(inc, inc, inc);

inc3(0).then(function (x) {
	console.log(x); // 3
});
```
