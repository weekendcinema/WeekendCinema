var CinemaController = require('../controller/CinemaController');
var PostController = require('../controller/PostController');
var CelebrityController = require('../controller/CelebrityController');

module.exports = function(app, db, express, path) {

  var cinemaController = new CinemaController(db);

  var postController = new PostController(db);

  var celebrityController = new CelebrityController(db);

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  //app.get("/v1/cinemas", cinemaController.getCinemas);
  app.get("/v1/cinema/:id", cinemaController.getCinema);
  app.get("/v1/celebrity/:id", celebrityController.getCelebrity);
  app.get("/v1/posts/", postController.getPosts);
  app.get("/v1/post/:id", postController.getPost);
  
  app.get("*", function(req, res, next) {
    res.sendFile(__dirname+'/index.html');
  });
}
