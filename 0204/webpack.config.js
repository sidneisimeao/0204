module.exports = {
  // nos modulos
  module: {
    // aplique as seguintes regras
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // nos arquivos que terminam com ($) com .js
        test: /\.js$/,
        // não procure nada em node_modules
        exclude: /node_modules/,
        // use o seguinte
        use: {
          // babel
          loader: 'babel-loader',
          // com as opções
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
};
