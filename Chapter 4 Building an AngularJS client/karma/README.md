## test runner

## Install karma

```
npm install karma --save-dev
```

## CLI global

```
npm install -g karma-cli
```

## Init

```
karma start
```

- Complementary plugins
- Config file
- some test

First, we need to add test frames to the project thath we will launch with Karma. Example with karma-jasmine

```
npm insta;; karma-jasmine --save-dev
```

Then, we must install the browser plugins on we want to try the tests.

```
npm install karma-chrome-launcher --save-dev

npm install karma-firefox-launcher --save-dev

npm install karma-safari-launcher --save-dev

npm install karma-phantomjs-launcher --save-dev

npm install karma-opera-launcher --save-dev

npm install karma-ie-launcher --save-dev
```

Once install the basic tools, we need to prepare a file that we define the instructions that karma need to know where save the files, how to show the errors, etc.


```
karma start karma.conf.js
```

The file karma.conf.js we save on the root of the project, is a module thath export the configuration

```
module.exports = function (config) {
	
	config.set({
		files: [
			'src/js/**/*.js',
			'./tests/appSpec.js'
		],
	});
};
```

The configuration can be more o less complex depending of the number of tasks:

elements of karma.conf.js

- files
- exclude
- reporters


```
npm install karma-html-reporter --save-dev
```

- framework
	example: framework: ['jasmine']

- basePath
- browsers
	exmaple: browsers: ['Chrome', 'PhantomJS', 'Firefox', 'IE']

- preprocesors
- autoWatch
