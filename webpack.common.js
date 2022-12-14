const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loader = require("sass-loader");

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"./build"),
        filename:"[name].js",
    },
    plugins:[new HtmlWebpackPlugin({
            template:"./src/index.html"
            }),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'build/**/*')]
            }),
        ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            },
            {
                test:/\.s?css$/i,
                exclude:/node_modules/,
                use:[MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|wepb)$/i,
                type:"asset/resource",
                generator : {
                    filename : 'images/[name][ext]',
                }
            },
            {
                test:/\.(woff|woff2|ttf|eot)$/,
                type:"asset/resource",
                generator : {
                    filename : 'fonts/[name][ext]',
                }
            },
            {
                test:/\.json$/,
                type:"asset/resource",
                generator : {
                    filename:'data/[name][ext]',
                }
            }
        ]
    },

}