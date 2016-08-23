Which of the following best describes the client-side Javascript compilation process from this section?

- You manually run browserify -o bin/index.js index.js to recompile

- No compilation is necessary, index.js can run in the browser as-is

- The gulp watch task triggers gulp-browserify, which compiles a copy of index.js, controllers.js, etc. that you include with script tags

X The gulp watch triggers gulp-browserify to recompile the index.js file