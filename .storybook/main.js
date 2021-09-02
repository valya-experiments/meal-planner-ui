const postcss = require("postcss");
const tailwindcss = require("../tailwind.config");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          // make storybook use my postCSS v8
          implementation: postcss,
          postcssOptions: {
            plugins: {
              tailwindcss,
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    },
  ],
};
