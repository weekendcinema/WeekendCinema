app.directive('myCurrentTime', ['$interval', function($interval) {
  // return the directive link function. (compile function not needed)
  return function(scope, element, attrs) {
    var stopTime; // so that we can cancel the time updates

    // used to update the UI
    function updateTime() {
      element.text(new Date());
    }

    stopTime = $interval(updateTime, 1000);

    // listen on DOM destroy (removal) event, and cancel the next UI update
    // to prevent updating time after the DOM element was removed.
    element.on('$destroy', function() {
      $interval.cancel(stopTime);
    });
  };
}]);