'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // var authMiddleware = app.middleware.auth({}, app);
  router.post('/registe', controller.user.index.registe);
  router.post('/login', controller.user.index.login);
  // app.use(authMiddleware)
  router.post('/movieCategory', controller.movie.index.movieCategory);
  router.post('/movieItem', controller.movie.index.movieItem);
  router.post('/movieSearch', controller.movie.index.itemSearch);
  router.post('/tvCategory', controller.tv.index.tvCategory);
  router.post('/tvItem', controller.tv.index.tvItem);
  router.post('/tvList', controller.tv.index.tvList);
};
