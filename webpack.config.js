const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// загружает css через тег link в index.php

const babelOptions = (preset) => {
    const opts = {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["@babel/plugin-transform-runtime"],
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
};

const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: babelOptions(),
        },
    ];

    return loaders;
};

module.exports = (env, argv) => {
    const is_prod = argv.mode === "production" ?? false;

    return {
        mode: is_prod ? "production" : "development",
        entry: {
            app: "./resources/js/app",
        },
        devtool: "inline-source-map",
        output: {
            filename: "app.js",
            // publicPath: "/",
            path: path.resolve(__dirname, "public/js"),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader","css-loader","sass-loader"],
                },
                {
                    test: /\.js$/,
                    use: jsLoaders(),
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelOptions(),
                        },
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'jsx', 'sass', 'scss', 'css'],
        },        
        devServer: {
            // historyApiFallback: true,
            headers: { "Access-Control-Allow-Origin": "*" },
        },
    };
};
