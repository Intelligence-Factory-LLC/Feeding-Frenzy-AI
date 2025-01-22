var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    vars = require('../variables');

// compile and concate js
const compileJs = function () {

    const baseAssets = vars.getBaseAssetsPath();
    const out = vars.getDistAssetsPath() + "js/";

    gulp
        .src([
            baseAssets + "js/layout.js",
            baseAssets + "js/app.js"
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(gulp.dest(out))

    return gulp
        .src([baseAssets + "js/**/*.js", '!' + baseAssets + "js/app.js", '!' + baseAssets + "js/layout.js"])
        .pipe(uglify())
        .pipe(gulp.dest(out))

}

gulp.task(compileJs);