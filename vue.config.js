const dotenv = require('./dotenv.js');

module.exports = {
  // publicPath: './', // relative path
  publicPath: process.env.NODE_ENV === 'production'
    ? '/whitefurjack/'
    : '/',

  devServer: {
    open: false,
    port: dotenv.FRONTEND_DEV_PORT,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
