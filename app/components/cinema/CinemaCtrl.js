function CinemaCtrl($scope, $http, $stateParams, RestAPI, constants) {
	me  = $scope;
	me.cinemaName = $stateParams.cinemaName;
	me.isLoading = true;
	me.found = true;
	me.setCurrentSong = function (val) {
		me.currentSong = val
	};
	RestAPI.get(constants.endpoints.loadCinema + $stateParams.cinemaName).success(function (response) {
		me.cinema = response || null;
		if (me.cinema.songs) {
			if (me.cinema.songs.youtubeUrl) {
				me.currentSong = me.cinema.songs.youtubeUrl;
			} else if (me.cinema.songs.list.length) {
				me.currentSong = me.cinema.songs.list[0].youtubeUrl;
			}
		}
		me.director = me.cinema.people.crew.find(function (cel) {
			return cel.type === 'Director'
		});
		me.producer = me.cinema.people.crew.find(function (cel) {
			return cel.type === 'Producer'
		});
		me.isLoading = false;
	}).error(function () {
		me.cinema = null;
		me.isLoading = false;
	});

}
app.controller('CinemaCtrl', ['$scope', '$http', '$stateParams', 'RestAPI', 'constants', CinemaCtrl]);

