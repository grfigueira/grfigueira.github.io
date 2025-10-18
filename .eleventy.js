module.exports = function (eleventyConfig) {
  // Copy assets and script.js to the output as-is
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/script.js": "script.js" });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    htmlTemplateEngine: "njk"
  };
};
