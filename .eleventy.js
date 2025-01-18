const CleanCSS = require("clean-css");

module.exports = async function (eleventyConfig) {
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // Set global permalinks to resource.html style
    eleventyConfig.addGlobalData("permalink", () => {
      return (data) =>
        `${data.page.filePathStem}.${data.page.outputFileExtension}`;
    });

    // Remove .html from `page.url` entries
    eleventyConfig.addUrlTransform((page) => {
      if (page.url.endsWith(".html")) {
        return page.url.slice(0, -1 * ".html".length);
      }
    });

    // Add cssmin filter to clean css and minify
    eleventyConfig.addFilter("cssmin", function (code) {
      return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/scripts/');
    eleventyConfig.addPassthroughCopy('./src/CNAME');

    
    return {
      dir: {
        input: 'src',
        output: 'out',
      },

      // configure base path for github pages purposes
      pathPrefix: "",
      
      // Set to use nunjucks with our src files
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
    };
  };