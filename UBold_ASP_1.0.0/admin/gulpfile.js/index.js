"use strict";

var gulp = require("gulp"),
    HubRegistry = require('gulp-hub'),
    browsersync = require("browser-sync"),
    del = require('del'),
    vars = require('./variables');


// Register (load some files into the registry)
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);

// Browsersync (live browser loading)
function initBrowserSync(done) {
    const distPath = vars.getBaseDistPath();
    const startPath = "/" + vars.getSelectedDemo() + "/index.html";
    browsersync.init({
        startPath: startPath,
        server: {
            baseDir: distPath,
            middleware: [
                function (req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });
    done();
}

// reloadBrowserSync Task
function reloadBrowserSync(done) {
    browsersync.reload();
    done();
}

// Watches the changes
function watchFiles() {

    const srcPath = vars.getSrcPath();
    const baseAssets = vars.getBaseAssetsPath();
    const demo = vars.getSelectedDemo();

    gulp.watch(srcPath + "**", gulp.series('copyHtml', reloadBrowserSync));
    gulp.watch(baseAssets + "images/**/*", gulp.series('copyImages', reloadBrowserSync));
    gulp.watch(baseAssets + "fonts/**/*", gulp.series('copyFonts', reloadBrowserSync));
    gulp.watch([baseAssets + "scss/**/*", "!" + baseAssets + "scss/icons.scss", "!" + baseAssets, "!" + baseAssets + "scss/config/" + demo + "/**"], gulp.series('compileScss', reloadBrowserSync));
    gulp.watch(baseAssets + "scss/config/" + demo + "/**", gulp.series('compileScss', 'compileBootstrap', reloadBrowserSync));
    // gulp.watch(baseAssets + "scss/config/"+demo+"/bootstrap.scss", gulp.series('compileBootstrap', reloadBrowserSync));
    gulp.watch(baseAssets + "scss/icons.scss", gulp.series('compileIcon', reloadBrowserSync));
    gulp.watch(baseAssets + "js/**/*", gulp.series("compileJs", reloadBrowserSync));
}


// Delete the dist Directory Task
function clean(done) {
    del.sync(vars.getBaseDistPath());
    done();
}
gulp.task(clean);

gulp.task("clean", gulp.series('clean'));

// watch all changes
// gulp.task("watch", gulp.parallel(watchFiles, initBrowserSync));
gulp.task("watch", gulp.parallel(watchFiles));



// Default Task
gulp.task('default', gulp.series('copyLibs', 'compileBootstrap', 'compileScss', 'compileIcon', 'copyAssets', 'copyImages', 'copyFonts', 'compileJs', 'watch'), function (done) { done(); });

// Build Task
gulp.task("build", gulp.series('copyLibs', 'compileBootstrap', 'compileScss', 'compileIcon', 'copyAssets', 'copyImages', 'copyFonts', 'compileJs'));
