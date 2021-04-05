const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mf-dashboard",
    projectName: "mf-app",
    webpackConfigEnv,
    argv,
  });
  // add postcss-loader into rule css
  defaultConfig.module.rules[1].use.push("postcss-loader");

  const result = merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
  });
  return result;
};
