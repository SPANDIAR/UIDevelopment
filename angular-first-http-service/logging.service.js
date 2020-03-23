(function() {
  const app = angular.module("integration");

  app.value("loggingSrvc", function(methodName) {
    console.log("Inside method " + methodName)
  });

})();
