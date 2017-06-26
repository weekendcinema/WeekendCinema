function ShortFilmCtrl($scope, $http, $stateParams, constants,$window) {
	$scope.found = true;
	$scope.isLoading = true;
	if($scope.$parent.posts && $scope.$parent.posts.length>0){
		$scope.$parent.posts.forEach(function (item, index) {
			if(item._id === $stateParams.postName){
				$scope.article = item;
				$scope.isLoading = false;
			}
		});
	}else{
		var GET = $http({
			method : 'GET',
			url : constants.api.url + '/post/' + $stateParams.postName
		});	
		GET.success(function(response) {
			$scope.article = response ? response : null;
			$scope.found = true;
			$scope.isLoading = false;
		});
		GET.error(function() {
			$scope.article = null;
			$scope.found = false;
			$scope.isLoading = false;
		});
	}
	$window.scrollTo(0, 0);
}

app.controller('ShortFilmCtrl',['$scope','$http', '$stateParams', 'constants','$window',ShortFilmCtrl]);