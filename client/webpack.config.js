const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "production",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"), // Output folder for built files
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        title: "TXT-ED",
      }),

      // Inject custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "service-worker.js",
      }),

      // Generates the PWA manifest file
      new WebpackPwaManifest({
        name: "Text Editor",
        short_name: "Editor",
        description: "A simple text editor that works offline",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        start_url: "./",
        publicPath: "./",
        filename: "manifest.json", // Ensure a static manifest filename
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        // CSS Loader to handle CSS files
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // Babel Loader to transpile modern JavaScript
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
