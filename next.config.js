const path = require('path');
const paths = require('./paths');

module.exports = {
    publicRuntimeConfig: {
      NODE_ENV: 'development'
    },
    webpack: (config, { defaultLoaders, isServer, dev }) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web'
      }
      // const paths = { appSrc: './', appNodeModules: './node_modules' };
      // config.externals = [
      //   paths.appSrc,
      //   `${paths.appNodeModules}/react-native-elements`,
      //   `${paths.appNodeModules}/react-native-vector-icons`
      // ]
      config.module.rules.push(
        {
          test: /\.(js|jsx|mjs)$/,
          include: [
            path.resolve(__dirname, 'node_modules/react-native-elements'),
            path.resolve(__dirname, 'node_modules/react-native-vector-icons')
          ],
          loader: require.resolve('babel-loader'),
              
              options: {
                presets: ['react-native'],
                // Re-write paths to import only the modules needed by the app
                plugins: ['react-native-web'],
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
              }
          // use: [
          //   defaultLoaders.babel,
          //   {
          //     loader: require.resolve('babel-loader'),
              
          //     options: {
          //       presets: ['react-native'],
          //       // Re-write paths to import only the modules needed by the app
          //       plugins: ['react-native-web'],
          //       // This is a feature of `babel-loader` for webpack (not Babel itself).
          //       // It enables caching results in ./node_modules/.cache/babel-loader/
          //       // directory for faster rebuilds.
          //       cacheDirectory: true,
          //     }
          //   }
          // ]
        }
      )
      return config
    }
}  