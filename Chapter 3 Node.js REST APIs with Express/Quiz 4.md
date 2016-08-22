Suppose you wanted to register a Wagner service that represents the contents of a file called "./config.json".
Which of the following would allow your functions to get the Javascript option in the "config.json" file through the "Config" service?

X A: 

```
wagner.factory('Config', function () {
	return require('fs').readFileSync('./config.json')
})
```

B:

```
wagner.factory('Config', fs.readFileSync('./config.json'));
```

C:
```
wagner.service('Config', function () {
	return require('fs').readFileSync('./config.json');
});
```