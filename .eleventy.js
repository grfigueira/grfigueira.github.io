module.exports = function (eleventyConfig) {
  const isDevServer = process.argv.includes("--serve");

  // Copy static frontend files to the output as-is.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/script.js": "script.js" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  return {
    dir: { input: "src", includes: "_includes", output: isDevServer ? "_site-dev" : "_site" },
    htmlTemplateEngine: "njk"
  };
};
