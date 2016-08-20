What will the following code print out?

```
test.bind(null, 'Hello, ')('world');

function test(p1, p2) {
	console.log(p1 + '' + p2)
}
```

- world

- null Hello

X Hello, world