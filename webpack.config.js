const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer'),
]

class RunAfterCompile {
    apply(Compiler) {
        Compiler.hooks.done.tap('Copy images', function () {
            fse.copySync('./app/assets/images', './docs/assets/images')
        })
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: ['css-loader', { loader: 'postcss-loader', options: { postcssOptions: { plugins: postCSSPlugins } } }]
}

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: [new HtmlWebpackPlugin({ filename: 'index.html', template: './app/index.html' })],
    module: {
        rules: [
            cssConfig
        ]
    }
}

if (currentTask == 'dev') {
    cssConfig.use.unshift('style-loader')
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')

    }
    config.devServer = {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    }
    config.mode = 'development'
}

if (currentTask == 'build') {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    })
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    postCSSPlugins.push(require('cssnano'))
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'docs')
    }
    config.mode = 'production'
    config.optimization = {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    enforce: true,
                    chunks: "all"
                }
            }
        }
    }
    config.plugins.push(
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'style.[chunkhash].css' }),
        new RunAfterCompile()
    )

}

module.exports = config