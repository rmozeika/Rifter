module.exports = {
    publicRuntimeConfig: {
      NODE_ENV: 'development'
    },
    webpack: config => {
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
      return config
    }
}  