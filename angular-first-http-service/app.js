const app = angular.module("integration", []);

app.controller("headerController", headerController);
app.controller("footerController", footerController);


function headerController(appServiceSrvc, loggingSrvc){
  loggingSrvc("headerController");
  this.headerTitle = appServiceSrvc.name;
}

function footerController(appServiceSrvc, loggingSrvc){
  loggingSrvc("footerController");
  this.footerTitle = appServiceSrvc.author + " - " + appServiceSrvc.company + " - version " + appServiceSrvc.version;
}
