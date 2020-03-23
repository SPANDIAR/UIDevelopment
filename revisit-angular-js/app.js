const myApp = angular.module("myApp", []);
myApp.controller("entryCtrlr", entry);
myApp.controller("formCtrlr", formDetails)
//myApp.controller("theClock", clock);

function entry($scope) {
  console.log("inside the entry controller");

  $scope.currentTime = new Date();
  $scope.timeOfDay = $scope.currentTime.getHours();
  $scope.clock = function() {
    console.log("inside the clock");
    $scope.currentTime = new Date();
    $scope.timeOfDay = $scope.currentTime.getHours();
  }
}

function formDetails($scope){

  $scope.findAge = function() {
    $scope.age = Math.abs(new Date() - $scope.DoB)/(1000*60*60*24*365);
  }
}
