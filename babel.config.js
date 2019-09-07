module.exports = function(api) {
    api.cache(true);
    return {
    // "presets": ["next/babel", ["module:metro-react-native-babel-preset"], ["module:react-native-web"]],
    "presets": ["next/babel"],

    "plugins": [
        "@babel/plugin-proposal-do-expressions",
        ["react-native-web", { "commonjs": true }],
        ["module-resolver", {
            "alias": {
              "^react-native$": "react-native-web"
            }
          }] 
      ]
  }
}