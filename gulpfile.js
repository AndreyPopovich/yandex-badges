var gulp = require('gulp'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence'),

    fs = require('fs'),
    path = require('path'),
    jade = require('jade'),
    mkdirp = require('mkdirp'),
    data = require('./data');

var PATHS = {
  sass: {
    src: 'app/sass/**/*.+(sass|scss)',
    dest: 'dist/css'
  },

  images: {
    src: 'app/images/**/*.+(jpg|jpeg|png|gif)',
    dest: 'dist/images'
  },

  jade: {
    src: 'app/template.jade',
    dest: 'dist'
  }
};

gulp.task('sass', function(done) {
  return gulp.src(PATHS.sass.src)
    .pipe(sass().on('error', done))
    .pipe(gulp.dest(PATHS.sass.dest));
});

gulp.task('images', function() {
  return gulp.src(PATHS.images.src)
    .pipe(cache(imagemin()))
    .pipe(gulp.dest(PATHS.images.dest));
});

gulp.task('jade', function(done) {
  mkdirp(PATHS.jade.dest, function(err) {
    if (err) {
      return done(err);
    }

    var compiled;
    try {
      compiled = jade.compileFile(PATHS.jade.src, { pretty: true });
    } catch (e) {
      return done(e);
    }

    var employees = data.employees;
    for (var index in employees) {
      if (employees.hasOwnProperty(index)) {
        data.current = index;
        fs.writeFileSync(path.join(PATHS.jade.dest, index + '.html'), compiled(data));
      }
    }

    done();
  });
});

gulp.task('default', function() {
  gulp.watch(PATHS.sass.src, ['sass']);
  gulp.watch(PATHS.images.src, ['images']);
  gulp.watch(PATHS.jade.src, ['jade']);
});

gulp.task('clean', function() {
  return del.sync('dist');
});

gulp.task('build', function (done) {
  runSequence('clean',
    ['sass', 'images', 'jade'],
    done
  );
});