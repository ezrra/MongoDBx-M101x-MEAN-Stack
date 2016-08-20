Suppose I have the following code in a file called index.js

```
require('./server')();
```

Which of the following implementations of server.js will not cause index.js to crash?

- function server () {}

X module.exports = function () {};

- module.exports.server = function () {};

- exports.server = function () {};