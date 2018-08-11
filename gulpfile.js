var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass()).on("error", sass.logError)
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', gulp.series('sass', function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });

  gulp.watch('scss/**/*.scss', gulp.series('sass'));
}));
