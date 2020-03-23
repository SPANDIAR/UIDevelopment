var myModule = angular.module('myApp',[]);
myModule.controller("mainCtrlr", Main);
myModule.controller("formInput", formInput);

function Main($scope){
  console.log("Main is called");
  $scope.clock = new Date();
  console.log($scope.clock);
  $scope.hourOfDay = $scope.clock.getHours();

  $scope.refreshTime = function() {
    console.log("called refreshTime");
    $scope.clock = new Date();
    $scope.hourOfDay = $scope.clock.getHours();
  };
}

function formInput($scope){
  console.log("inside form input");
}
