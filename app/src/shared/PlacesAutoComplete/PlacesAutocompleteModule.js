import pAutoCompController from 'src/shared/PlacesAutoComplete/pAutoCompController';

let moduleName2 = angular.module('placesAutoComp', []).directive('placesAutoComplete', function() {
  return {
    restrict: 'E',
    require: "?ngModel",
    scope: {
      selected: '='
    },
    templateUrl: './src/shared/PlacesAutoComplete/view/placesAutoComp.html',
    controller: pAutoCompController,
    controllerAs: 'pAutoCtrl',
    link: function(scope, a, e, ngModel) {
      if (!ngModel) return;
      scope.$watch('selected', function() {
        if (scope.selected) {
          ngModel.$setViewValue(scope.selected);
        }
      });
      ngModel.$render = function() {
        scope.value = ngModel.$modelValue;
      };
    }
  };
});


export default moduleName2.name;
