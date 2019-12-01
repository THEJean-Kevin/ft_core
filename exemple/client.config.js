const glob = require("glob");
module.exports = {
    entry: glob.sync("./src/**/*.js"),
    output: {
        filename: 'index.js',
        path: __dirname + '/dist/',
    },
};
