const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';


// Load the custom app ES6 modules

import SideNavController from 'content/SideNavController';
import UsersService    from 'content/UsersDataservice';
import FrmCtrl from 'forms/Controllers/FormController';

// Define the Angular 'users' module

let moduleName = angular
      .module( "apartments", ['ngMap'] )
      .service("usersService"   , UsersService )
    .controller("FormController", FrmCtrl)
    .controller("SideNavController" , SideNavController )
      .config( ($mdIconProvider) => {
        $mdIconProvider
          .defaultIconSet( URL_AVATAR_ICONS, 128 );
      })
      .name;


export default moduleName;
