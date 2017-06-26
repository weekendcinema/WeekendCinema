/* The CinemaDAO must be constructed with a connected database object */
function CinemaDAO(db) {
  "use strict";
  /*
   * If this constructor is called without the "new" operator, "this" points to
   * the global object. Log a warning and call it correctly.
   */
  if (false === (this instanceof CinemaDAO)) {
    console.log('Warning: CinemaDAO constructor called without "new" operator');
    return new CinemaDAO(db);
  }

  var cinemaCollection = db.collection("cinema");

  this.getCinema = function(id, callback) {

    var query = {
      '_id': id
    };
    cinemaCollection.findOne(query, function(err, cinemaData) {
      if (err){
        return callback(err, '{}');
      }
      callback(err, cinemaData);
    });
  };

  this.getCinemas = function(options, callback) {
    var query = {
            "general.releaseDt": {
              "$gte": new Date()
            }
          };
          var projection = {
            "cinemaId": true,
            "name": true,
            "general.releaseDt": true,
            "general.posterUrl": true,
            "lang": true,
            "_id": false
          }
          var sort = {
                  'general.releaseDt': 1,
                  'name':1
          }
          cinemaCollection.find(query, projection).sort(sort).toArray(function(err, data) {
            if (err) return callback(null, '{}');
            callback(err, data);
          });
        };

}

module.exports = CinemaDAO;
