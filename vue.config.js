module.exports = {
    // publicPath: './', // relative path
    publicPath: process.env.NODE_ENV === 'production'
        ? '/whitefurjack/'
        : '/',
};
