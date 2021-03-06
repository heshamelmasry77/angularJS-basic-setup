'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/app/module.config.js'),
    path.join(conf.paths.src, '/app/components/*.js'),
    path.join(conf.paths.src, '/app/app.def.js'),
    path.join(conf.paths.src, '/app/*.config.js'),
    path.join(conf.paths.src, '/app/*.constants.js'),
    path.join(conf.paths.src, '/app/*.route.js'),
    path.join(conf.paths.src, '/app/*.run.js'),
    path.join(conf.paths.src, '/app/**/*.def.js'),
    path.join(conf.paths.src, '/app/**/*.config.js'),
    path.join(conf.paths.src, '/app/**/*.constants.js'),
    path.join(conf.paths.src, '/app/**/*.route.js'),
    path.join(conf.paths.src, '/app/**/*.run.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
  ]);

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: true
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
