const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
 
gulp.task('default', () =>
	gulp.src('src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist'))
);

gulp.task('lint', () =>
  gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
);

gulp.task('watch', () => 
	gulp.watch('js/*.js',['lint'])
	);

