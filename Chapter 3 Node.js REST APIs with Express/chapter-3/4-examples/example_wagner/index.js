var wagner = require('wagner-core');
var assert = require('assert');

wagner.factory('bacon', function () {
	return 'bacon';
});

wagner.factory('breakfast', function (bacon) {
	return bacon + ' and eggs';
});

var result = wagner.invoke(function (breakfast) {
	assert.equal(breakfast, 'bacon and eggs');
	return breakfast;
});

assert.equal(result, 'bacon and eggs');