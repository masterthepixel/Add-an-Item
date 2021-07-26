import { merge } from "webpack-merge";
/* eslint-disable @typescript-eslint/no-var-requires */
const common = require("./webpack.common.ts");

module.exports = merge(common, {
  mode: "production",
});
