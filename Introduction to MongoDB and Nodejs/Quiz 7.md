### Suppose you have the following mocha test:

```
describe('my feature', function () {
	it('work', function () {});
	it('fails gracefully', function () {

	});
});

describe('my other feature', function () {
	it('sorta works', function () {});
});
```

How many tests would run if you ran the above test with ./node_modules/.bin/mocha -g "works"?

- 0

- 1

X 2

- 3