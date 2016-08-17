## Starting a standalone mongod and connecting with shell


## Package.json installing dependencies with npm
> node -v
> npm -v

## Connecting to mongodb with node.js
Mongoose is an object document mapper or ODM.
Provides functionality: Schema validation on top pf the MongoDB node.js driver.


## Inserts and queries using the node.js driver

## Node.js concurrency and event loop fundamentals
You interact with MongoDB Node JS driver using callbacks.
These callbacks hints at Javascript's concurrency model.
Javascript is a language build to run in a event loop.
First of all, the loop is single threaded.
Therefore, instead of thinking of Javascript as an imperative programming language like Java or C++.

## require() basics
The require function in Node.js mechanism for breaking up large projects into small, manageable files.
The require functions lets you include functions from external modules and other files.

Node.js uses file level scoping. This means that by default, any variable or function declared in a file is not accessible outside of that file.

Node.js has a global object, but using it is almost always a mistake.
The require function is the preferred way to shar code between files.

## Using mocha for testing
In particular, Mocha is the most popular testing framework for Node.js

Mocha uses behavior driven development or BDD for short syntax.

BDD style is designed to read more like stories than tests.

Mocha also has the ability to use different reporters for test output.
Reporters control the format that your test results are output in.

## package.json: npm run-script
package.json thath defines two named scripts. The test script that run Mocha with the detault Spec Reporter.

> npm test // package.json - scripts
> npm run test-kitten
> npm run test
> npm install mocha -g

## Runnign mocha tests with gulp

Gulp starts and waits for a file to change. When it changes, it runs your test an d then it repots the results and goes back to waiting for more changes.

