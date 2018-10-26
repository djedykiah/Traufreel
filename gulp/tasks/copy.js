var gulp = require('gulp');
var config = require('../config.js');

gulp.task('copy:fonts', function () {
    return gulp
        .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:data', function () {
    return gulp
        .src(config.src.data + '/**/*.*')
        .pipe(gulp.dest(config.dest.data));
});

gulp.task('copy:lib', function () {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});
gulp.task('copy:audio', function () {
  return gulp
      .src(config.src.audio + '/**/*.*')
      .pipe(gulp.dest(config.dest.audio));
});
gulp.task('copy:localization', function () {
  return gulp
      .src(config.src.localization + '/**/*.*')
      .pipe(gulp.dest(config.dest.localization));
});

gulp.task('copy:rootfiles', function () {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function () {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,ico,gif}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', [
    'copy:img',
    'copy:audio',
    'copy:localization',
    // 'copy:rootfiles',
    // 'copy:lib',
    // 'copy:data',
    'copy:fonts'
]);
gulp.task('copy:watch', function () {
    gulp.watch(config.src.img + '/*', ['copy']);
});
