(function(){

  const app = angular.module("integration");
  app.controller("entryController", entryController);

  function entryController(loggingSrvc, repairDetails) {
    let self = this;
    this.status = "Alive";
    repairDetails.getRetailRepairSummary()
      .then(function(data){
        self.repairDetails = data;
      });

    this.getCustomerDetails = function(index) {
      loggingSrvc("getCustomerDetails");
      this.customerDetails = this.repairDetails[0].repairs[index].customer;
    }

  }
})();
