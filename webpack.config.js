const path = require("path");

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/app"),
        filename: "app.js",
    },
    watch: true,
};