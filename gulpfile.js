/**
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
 */

const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const strip = require('gulp-strip-comments');
const header = require('gulp-header-comment');

function client() {
    return src('src/client/**/*.js')
        .pipe(concat('client.js'))
        .pipe(uglify())
        .pipe(strip())
        .pipe(header(`
            @Project: FivemTools
            @Author: Samuelds
            @License: GNU General Public License v3.0
            @Source: https://github.com/FivemTools/ft_core
        `))
        .pipe(dest('dist'));
}

function server() {
    return src('src/server/**/*.js')
        .pipe(concat('server.js'))
        .pipe(uglify())
        .pipe(strip())
        .pipe(header(`
            @Project: FivemTools
            @Author: Samuelds
            @License: GNU General Public License v3.0
            @Source: https://github.com/FivemTools/ft_core
        `))
        .pipe(dest('dist'));
}

exports.client = client;
exports.server = server;
exports.default = parallel(client, server);