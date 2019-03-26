var webpack = require("webpack");
// webpack 3.1.0
module.exports = {
	entry : "./src/index.js",
	output : {
		path : __dirname + "/dist/assets",
		filename: "bundle.js",
		publicPath : "assets"
	},
	devServer:{
		inline: true,
		contentBase: "./dist",
		port: 3000
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"]
			},{
				test:/\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},{
				test:/\.css$/,
				loader:"style-loader!css-loader!autoprefixer-loader"
			},{
				test:/\.scss$/,
				loader:"style-loader!css-loader!autoprefixer-loader!sass-loader"
			}
		]
	}
}