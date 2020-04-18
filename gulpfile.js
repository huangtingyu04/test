var gulp = require('gulp')
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

gulp.task('concat', function () {
  return gulp.src('./source/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'));
})

var vendorjs = [
  'bower_components/jquery/dist/jquery.min.js'
]

gulp.task('vendor', function () {
  return gulp.src(vendorjs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/javascripts'));
})

gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', gulp.series('concat', 'sass', 'vendor'))