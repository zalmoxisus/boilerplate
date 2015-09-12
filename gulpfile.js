var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('closure', function() {
  return gulp.src('dist/en.js')
    .pipe(closureCompiler({
      compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
      fileName: 'app.js',
      compilerFlags: {
        'compilation_level': 'ADVANCED_OPTIMIZATIONS',
        externs: [
          'node_modules/react-externs/externs.js'
        ],
        'output_wrapper': '(function(){%output%})();',
        'warning_level': 'QUIET'
      },
      maxBuffer: 5000
    }))
    .pipe(gulp.dest('build'))
});

//gulp.task('build', ['build-webpack']);

//gulp.task('build', function(done) {
//  runSequence('build-webpack', 'closure', done);
//});