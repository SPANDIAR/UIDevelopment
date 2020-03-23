(function() {
  const app = angular.module("integration");
  app.service("repairDetails", getRepairDetailSvc);

  function getRepairDetailSvc($http) {
    let self = this;

    self.getRetailRepairSummary = function(){
      let promise1 = $http.get("http://localhost:3000/retailRepairSummary");
      let promise2 = promise1.then(function(response){
        return response.data;
      });
      return promise2;
    }
  }
})();
