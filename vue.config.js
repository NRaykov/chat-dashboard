const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/chat-dashboard/'
    : '/',
  lintOnSave: true,
  outputDir: path.resolve(__dirname, './docs'),
  transpileDependencies: [
    'vuetify',
  ],
};
