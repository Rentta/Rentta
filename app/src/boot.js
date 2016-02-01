
// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.
import 'angular-material/angular-material.css!';
import 'assets/app.css!';

// Load Angular libraries

import angular from 'angular';
import material from 'angular-material';
import ngMap from 'ngmap';


// Load custom application modules
import apartments from 'apartments/Apartments';
import autocomplace from 'shared/PlacesAutoComplete/PlacesAutocompleteModule';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
    .element( document )
    .ready( function() {

        let appName = 'rentta-app';


        let body = document.getElementsByTagName("body")[0];
        let app  = angular
            .module( appName, [ material, apartments, autocomplace] )
            .config(function($mdThemingProvider){
                $mdThemingProvider.theme('default')
                    .primaryPalette('indigo')
                    .accentPalette('red');
                  });

        angular.bootstrap( body, [ app.name ], { strictDi: false });

    });
