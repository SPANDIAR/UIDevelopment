(function() {
  const app = angular.module("integration");

  function appConstructor(appNameSrvc){
    this.name=appNameSrvc;
    this.author="sankarapandi";
    this.company="Karumpuli & Co";
    this.version=1.0;
  }

  app.service("appServiceSrvc", appConstructor);

})();
