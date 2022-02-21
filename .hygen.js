module.exports = {
  templates: `${__dirname}/.hygen`,
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => __dirname,
  },
};
