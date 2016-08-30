### Which of the following package.json scripts will run all tests whose name contains "unit"?

```
{
	"scripts": {
		"test-1": "mocha -g 'unit' test/*",
		"test-2": "mocha test/*",
		"test-3": "mocha -R 'unit' test/",
		"test-4": "mocha test/unit"
	}
}
```

X npm run test-1

- npm run test-2

- npm run test-3

- npm run test-4