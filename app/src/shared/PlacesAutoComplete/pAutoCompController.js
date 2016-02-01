function pAutoCompController($q, $scope) {
  $scope.selected = null;
  this.AutoCompleteService = new google.maps.places.AutocompleteService();
  this.SearchForAddress = function(addr) {
    var deferred = $q.defer();
    // console.log('searching for address:', addr);
    this.AutoCompleteService.getQueryPredictions({
      input: addr
    }, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // console.info('got auto complete result:', results);
        deferred.resolve(results);
      } else {
        deferred.reject(status);
      }
    });
    return deferred.promise;
  };
  this.getSelected = function(item) {
    $scope.selected = item;
  };
}
