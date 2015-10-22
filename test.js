var Promise = require('bluebird');
var test = require('tape');
var flow = require('./');

test('Should execute flow properly', function shouldExecuteFlowProperly (t) {
	var func = flow(f1, f2, f3, f4);

	func(-1).then(function finalAssert (res) {
		t.equal(res, 4);
		t.end();
	});

	function f1 (x) {
		t.equal(x, -1);
		return Promise.resolve(1);
	}

	function f2 (x) {
		t.equal(x, 1);
		return 2;
	}

	function f3 (x) {
		t.equal(x, 2);
		return Promise.resolve(3);
	}

	function f4 (x) {
		t.equal(x, 3);
		return 4;
	}
});
