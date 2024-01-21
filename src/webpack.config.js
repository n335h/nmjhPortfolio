const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
	// ... other webpack configurations ...

	plugins: [
		new DotenvWebpackPlugin(),
		// ... other plugins ...
	],

	resolve: {
		// ... other resolve configurations ...
	},
};
