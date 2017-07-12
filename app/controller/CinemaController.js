var CinemaDAO = require('../dao/CinemaDAO');

function CinemaController(db) {
  "use strict";
  var cinemaDAO = new CinemaDAO(db);

  this.getCinema = function(req, res, next) {
    var id = req.params.id;
    cinemaDAO.getCinema(id, function(err, details) {
      if (err) throw next(err);
      res.json(details);
    });
  };

  this.upcomingCinemas = function(req, res, next) {
    cinemaDAO.upcomingCinemas(function(err, data) {
      if (err) throw next(err);
      var response = {
        "data": data
      }
      res.json(response);
    });
  };
  
  this.recentCinemas = function(req, res, next) {
    cinemaDAO.recentCinemas(function(err, data) {
      if (err) throw next(err);
      var response = {
        "data": data
      }
      res.json(response);
    });
  };
}

module.exports = CinemaController;