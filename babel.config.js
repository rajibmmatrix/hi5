module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          alias: {
            '~app': './src/app',
            '~assets': './src/assets',
            '~components': './src/components',
            '~common': './src/components/common',
            '~config': './src/config',
            '~constants': './src/constants',
            '~navigations': './src/navigations',
            '~screens': './src/screens',
            '~services': './src/services',
            '~utils': './src/utils',
          },
        },
      ],
    ],
  };
};
