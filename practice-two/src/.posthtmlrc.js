const posthtmlInclude = require("posthtml-include");
const config = {
  plugins: [
    posthtmlInclude({
      root: __dirname + "/",
    }),
  ],
};
module.exports = config;
