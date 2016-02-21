/**placesAutoComp
 * Created by rabak on 1/28/16.
 */
function FrmCtrl($mdDialog,$q,$http) {
  this.renovatedStates = ['לא',
    'כללי',
    'מטבח בלבד',
    'מקלחת'
  ];

  this.ops = ['מרפסת',
    'מרוהטת',
    'פרקט'
  ];
  this.ops2 = [
    'חניה',
    'חזיתית',
    'מחולקת'
  ];

  this.selected = [];


  this.toggle = function(item, ops) {
    var idx = ops.indexOf(item);
    if (idx > -1) ops.splice(idx, 1);
    else ops.push(item);
  };
  this.exists = function(item, ops) {
    return ops.indexOf(item) > -1;
  };
  this.hide = function() {
    $mdDialog.hide();
  };

  this.cancel = function() {
    $mdDialog.cancel();
  };

  this.answer = function(ans) {
    console.log("starting to write: ", ans);
    $http.post('/api/newapt', ans)
            .success(function(data) {
                console.log(data);
                $mdDialog.hide();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
  };


}
