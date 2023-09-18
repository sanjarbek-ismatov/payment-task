const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
    mode: process.env.NODE_ENV || "production",
    entry: "./server.ts",
    target: "node",
    externals: [nodeExternals()],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
};