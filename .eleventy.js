module.exports = async function (eleventyConfig) {
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    return {
      dir: {
        input: 'src',
        output: 'out',
      },
      pathPrefix: "/pages-test/"
    };
  };