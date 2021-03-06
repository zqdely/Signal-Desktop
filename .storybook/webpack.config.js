module.exports = ({ config }) => {
  config.entry.unshift(
    '!!style-loader!css-loader!sanitize.css',
    '!!style-loader!css-loader!typeface-inter'
  );

  config.module.rules.unshift(
    {
      test: /\.tsx?$/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader?modules=true&localsConvention=camelCaseOnly',
        'sass-loader',
      ],
    }
  );

  config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js'];

  return config;
};
