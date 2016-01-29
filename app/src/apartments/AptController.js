/**
 * Main App Controller for the Angular Material Starter App
 * @param $scope
 * @param $mdSidenav
 * @param avatarsService
 * @constructor
 */



function AptController(usersService, $mdSidenav, $mdDialog) {


    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.showAlert = showAlert;
    self.showAdd = showAdd;
    // Load all registered users

    usersService
        .loadAll()
        .then(function (users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser(user) {

        self.selected = angular.isNumber(user) ? self.users[user] : user;
        self.toggleList();
    }

    function showAlert() {
        alert = $mdDialog.alert({
            title: 'Attention',
            textContent: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
        });
        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    }

    function showAdd(ev) {
        $mdDialog.show({
                controller: 'FormController',
                controllerAs: 'AddCtrl',
                templateUrl: './src/forms/view/form.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (answer) {
                status = 'You said the information was "' + answer + '".';
            }, function () {
                status = 'You cancelled the dialog.';
            });
    }

    //};

}


