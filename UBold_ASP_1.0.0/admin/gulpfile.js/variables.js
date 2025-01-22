var args = require('yargs').argv;

/**
 * ---------------------------------------------------------------------------------------------
 * Global settings
 * ---------------------------------------------------------------------------------------------
*/

const DEFAULT_DEMO = 'default';
const AVAILABLE_DEMOS = ['creative', 'default', 'material', 'modern', 'purple', 'saas'];

var FOLDER_PATHS = {
    baseSrc: "src/", // source files
    baseDist: "dist/", // build files
    baseAssets: "src/assets/", // base assets
};

const selectedDemo = (args['demo'] ? (AVAILABLE_DEMOS.indexOf(args['demo']) >= 0 ? args['demo'] : null) : null) ? args['demo'] : DEFAULT_DEMO;

function getSrcFolderPath() {
    return FOLDER_PATHS.baseSrc + selectedDemo + "/";
}

function getDistFolderPath() {
    return FOLDER_PATHS.baseDist + selectedDemo + "/";
}

function getDistAssetFolderPath() {
    return getDistFolderPath(selectedDemo) + "wwwroot/"; // dotnet-core default
}

module.exports = {
    getSelectedDemo: function () { return selectedDemo },
    getBaseSrcPath: function () { return FOLDER_PATHS.baseSrc },
    getBaseDistPath: function () { return FOLDER_PATHS.baseDist },
    getBaseAssetsPath: function () { return FOLDER_PATHS.baseAssets },
    getSrcPath: getSrcFolderPath,
    getDistPath: getDistFolderPath,
    getDistAssetsPath: getDistAssetFolderPath
}