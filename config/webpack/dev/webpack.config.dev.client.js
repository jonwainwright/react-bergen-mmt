import path from 'path'
import webpack from 'webpack'
import StyleLintPlugin from 'stylelint-webpack-plugin'

const root = process.cwd()

export default {
  stats: 'none',
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new StyleLintPlugin()
  ],
  devServer: {
    port: 3000,
    quiet: true,
    contentBase: path.resolve(root, 'src'),
    open: 'http://localhost:3000'
  }
}
