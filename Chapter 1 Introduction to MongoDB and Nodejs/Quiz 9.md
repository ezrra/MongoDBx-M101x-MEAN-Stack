Which of the following will tell gulp to watch all files under the "test" directory and run the 'test' task one changes?

- gulp.task('test', function () { gul.src('test/**').pipe(mocha()); });
- gulp.task('test', function () { gulp.watch('test/**', ['mocha']); })
X gulp.watch('test/**', ['test']);
- gulp.watch('*.js', ['test']);