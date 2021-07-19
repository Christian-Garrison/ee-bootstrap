// ///////////////////////////////////////////////////////////////////////
// Structure for compiled assets should be:
// /dist/(css|js)/(base|pages|vendor)/filename.extension

// If a file is compiled otherwise update it.
// ///////////////////////////////////////////////////////////////////////
const { watch, series, src, dest } = require('gulp');

// ///////////////////////////////////////////////////////////////////////
// Added Dependencies
// ///////////////////////////////////////////////////////////////////////
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const cond = require('gulp-cond');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// ///////////////////////////////////////////////////////////////////////
// Styles
// ///////////////////////////////////////////////////////////////////////

const componentStyles = 'assets/styles/components/*.scss';
const componentStylesPath = 'assets/dist/styles/components/';

const pageStyles = 'assets/styles/pages/*.scss';
const pageStylesPath = 'assets/dist/styles/pages/';

// ///////////////////////////////////////////////////////////////////////
// Scripts
// ///////////////////////////////////////////////////////////////////////
const baseScripts = 'assets/scripts/base/*.js';
const baseScriptsPath = 'assets/dist/scripts/base/';

const componentScripts = 'assets/scripts/components/*.js';
const componentScriptsPath = 'assets/dist/scripts/components/';

const pageScripts = 'assets/scripts/pages/*.js';
const pageScriptsPath = 'assets/dist/scripts/pages/';

///////////////////////////////////////////////
// Tasks
//////////////////////////////////////////////

function buildScripts(assets, path) {
	return src(assets)
		.pipe(uglify())
		.pipe(concat('global.js'))
		.pipe(dest(path))
		.pipe(notify('Build Complete: buildScripts'));
}

function buildPageScripts(assets, path) {
	return src(assets).pipe(uglify()).pipe(dest(path)).pipe(notify('Build Complete: buildPageScripts'));
}

function buildComponentScripts(assets, path) {
	return src(assets).pipe(uglify()).pipe(dest(path)).pipe(notify('Build Complete: buildComponentScripts'));
}
function buildStyles(assets, path, file = 'false') {
	var concating = false;

	if (file != 'false') {
		concating = true;
	}

	return src(assets)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(cond(concating, concat(file), console.log('else')))
		.pipe(dest(path))
		.pipe(notify('Build Complete: BuildStyles'));
}

// ///////////////////////////////////////////////////////////////////////
// Exports
// ///////////////////////////////////////////////////////////////////////
exports.default = function () {
	// Styles
	// ------------------------------------------
	watch('assets/styles/components/*.scss', function (cb) {
		buildStyles(componentStyles, componentStylesPath);
		cb();
	});
	watch('assets/styles/pages/*.scss', function (cb) {
		buildStyles(pageStyles, pageStylesPath);
		cb();
	});

	// Scripts
	// ------------------------------------------
	watch('assets/scripts/base/*.js', function (cb) {
		buildScripts(baseScripts, baseScriptsPath);
		cb();
	});
	watch('assets/scripts/components/*.js', function (cb) {
		buildComponentScripts(componentScripts, componentScriptsPath);
		cb();
	});
	watch('assets/scripts/pages/*.js', function (cb) {
		buildPageScripts(pageScripts, pageScriptsPath);
		cb();
	});
};
