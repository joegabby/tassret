const { getDefaultConfig } = require("expo/metro-config");
const exclusionList = require('metro-config/src/defaults/exclusionList'); // Updated to use exclusionList

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  // Config for react-native-svg-transformer
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };
  config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'gif');

  // Adding exclusionList to ignore BookSquare.js file
  config.resolver.blacklistRE = exclusionList([
    /BookSquare\.js/,
    /node_modules\/iconsax-react-native\/dist\/cjs\/index.js/,  // Ensure valid path formatting
  ]);

  return config;
})();
