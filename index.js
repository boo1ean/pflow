var Promise = require('bluebird');

module.exports = function flow () {
	var funcs = Array.prototype.slice.apply(arguments);

	return function executeFlow (params) {
		var promise = Promise.resolve(params);
		var promises = [];

		funcs.forEach(function appendStep (func) {
			promise = promise.then(function next (res) {
				return func(res);
			});
		});

		return promise;
	}
}
