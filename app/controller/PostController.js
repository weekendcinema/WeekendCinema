var PostDAO = require('../dao/PostDAO');

function PostController(db) {
  "use strict";
  var postDAO = new PostDAO(db);

  this.getPosts = function(req, res, next) {
    postDAO.getPosts(function(err, data) {
      if (err) throw next(err);
      res.json(data);
    });
  }

  this.getPost = function(req, res, next) {
    postDAO.getPost(req.params.id, function(err, data) {
      if (err) throw next(err);
      res.json(data);
    });
  }
}

module.exports = PostController;
