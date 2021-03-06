const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildMode = process.env.NODE_ENV || 'development';
const isProduction = buildMode === 'production';

module.exports = {
   mode: buildMode,
   entry: './src/index.ts',
   devtool: isProduction ? 'inline-source-map' : 'source-map',
   module: {
	  rules: [
		 {
			test: /\.(ts|tsx)?$/u,
			use: 'ts-loader',
			exclude: [path.resolve(__dirname, 'node_modules')]
		 },
		 {
			test: /\.js$/u,
			exclude: [path.resolve(__dirname, 'node_modules')],
			loader: 'babel-loader'
		 },
		 {
			test: /\.css$/u,
			use: [
			   MiniCssExtractPlugin.loader,
			   'css-loader'
			]
		 },
		 {
			test: /\.(ico|png|jpg)$/u,
			loader: 'file-loader'
		 },
		 {
			test: /\.html$/u,
			loader: 'html-loader'
		 }
	  ]
   },
   resolve: {
	  extensions: ['.ts', '.tsx', '.js', '.css']
   },
   plugins: [
	  new CleanWebpackPlugin({
		 cleanStaleWebpackAssets: false
	  }),
	  new ESLintPlugin({
		 failOnError: isProduction,
		 emitError: true,
		 emitWarning: true
	  }),
	  new MiniCssExtractPlugin({
		 filename: 'styles.css'
	  }),
	  new HtmlWebpackPlugin({
		 filename: 'index.html',
		 template: './src/template.html',
		 favicon: './src/assets/favicon.ico',
		 minify: isProduction,
		 inject: true,
		 hash: true
	  })
   ],
   output: {
	  path: path.resolve(__dirname, 'dist/'),
	  publicPath: '',
	  filename: 'bundle.js'
   },
   devServer: {
	  contentBase: path.join(__dirname, 'dist/'),
	  publicPath: '/',
	  port: 3000,
	  writeToDisk: true
   },
   optimization: {
	  minimizer: [
		 '...',
		 new CssMinimizerPlugin()
	  ]
   }
};
