const path = require("path");

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        stylus: {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
            ],
        },
        files: {
            test: /\.(png|jpe?g)$/,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        svg: {
            test: /\.svg/,
            use: {
                loader: "svg-url-loader",
                options: {
                    // make all svg images to work in IE
                    iesafe: true,
                },
            },
        },
        svgReader: {
            test: /\.svg$/,
            use: [
                {
                    loader: "babel-loader"
                },
                {
                    loader: "react-svg-loader",
                    options: {
                        jsx: true // true outputs JSX tags
                    }
                }
            ]
        }
    };

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    };

    return {
        modules,
        resolve,
    }
};
