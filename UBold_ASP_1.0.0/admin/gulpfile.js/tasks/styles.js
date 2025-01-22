var gulp = require("gulp"),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    rtlcss = require('gulp-rtlcss'),
    vars = require('../variables');


// compile & minify sass
const compileScss = function () {

    const out = vars.getDistAssetsPath() + "css/";
    const baseAssets = vars.getBaseAssetsPath();
    const demo = vars.getSelectedDemo();

    gulp
        .src([baseAssets + "scss/config/"+demo+"/app.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass.sync()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(out))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps
        .pipe(gulp.dest(out));

    // generate rtl
    return gulp
    .src([baseAssets + "scss/config/"+demo+"/app.scss"])
        .pipe(sourcemaps.init())        
        .pipe(sass.sync()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(rtlcss())
        .pipe(gulp.dest(out))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: "-rtl.min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps
        .pipe(gulp.dest(out));
}

const compileBootstrap = function () {

    const out = vars.getDistAssetsPath() + "css/";
    const baseAssets = vars.getBaseAssetsPath();
    
    const demo = vars.getSelectedDemo();

    gulp
    .src([baseAssets + "scss/config/"+demo+"/bootstrap.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass.sync()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(out))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps
        .pipe(gulp.dest(out));

    // generate rtl
    return gulp
    .src([baseAssets + "scss/config/"+demo+"/bootstrap.scss"])
        .pipe(sourcemaps.init())        
        .pipe(sass.sync()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(rtlcss())
        .pipe(gulp.dest(out))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: "-rtl.min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps
        .pipe(gulp.dest(out));
}

const compileIcon = function () {

    const out = vars.getDistAssetsPath() + "css/";
    const baseAssets = vars.getBaseAssetsPath();

    return gulp
        .src([baseAssets + "scss/icons.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass.sync()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(out))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to icons.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for icons.min.css
        .pipe(gulp.dest(out));


}

gulp.task(compileScss);
gulp.task(compileBootstrap);
gulp.task(compileIcon);