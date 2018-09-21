module.exports = app => {
  app.route('/')
    .get((_, res) => res.status(200).json({ Index: 'Hello World' }));
};
