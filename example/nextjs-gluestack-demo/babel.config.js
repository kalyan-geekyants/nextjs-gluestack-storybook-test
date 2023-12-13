const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'next/babel'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                '@custom-ui/themed': path.join(
                  __dirname,
                  '../../packages/themed/src'
                ),
                '@custom-ui/config': path.join(
                  __dirname,
                  '../../packages/config/src/gluestack-ui.config'
                ),
              },
            },
          ]
        : [
            'babel-plugin-react-docgen-typescript',
            {
              exclude: 'node_modules',
            },
          ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
