module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './assets',
          '@helpers': './sources/helpers',
          '@references': './sources/references',
          '@screens': './sources/screens',
        },
      },
    ],
    'react-native-paper/babel',
  ],
};
