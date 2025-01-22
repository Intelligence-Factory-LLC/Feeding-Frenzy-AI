var gulp = require("gulp"),
    newer = require("gulp-newer"),
    imagemin = require("gulp-imagemin"),
    vars = require('../variables');

// image processing
const copyImages = function () {
    const baseAssets = vars.getBaseAssetsPath();
    const distDemoFolder = vars.getDistAssetsPath();

    var out = distDemoFolder + "images";

    return gulp
        .src(baseAssets + "images/**/*")
        .pipe(newer(out))
        .pipe(imagemin())
        .pipe(gulp.dest(out));
}

gulp.task(copyImages);