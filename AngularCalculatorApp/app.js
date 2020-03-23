const calculator = angular.module('calculator', []);
calculator.controller('basicMath', basicMath);

function basicMath(){
  console.log("inside basic math");

  this.findTotal = function(){
    console.log("Variables are: " + this.var1 + " and " + this.var2);
    console.log("Operation is: " + this.oper);

    switch(this.oper) {
      case '+':
        this.total = (this.var1 + this.var2);
      break;
      case '-':
        this.total = (this.var1 - this.var2);
      break;
      case '*':
        this.total = (this.var1 * this.var2);
      break;
      case '/':
        this.total = (this.var1 / this.var2);
      break;
      default:
        this.var1=0;
        this.var2=0;
        this.oper=null;
    }

  }

  this.operation = function(chosenOp){
    if(chosenOp === 'clear'){
      this.oper = null;
      this.mathOp = null;
      this.var1 = null;
      this.var2 = null;
      this.total = null;
    } else {
      this.oper = chosenOp;
      this.mathOp = chosenOp;
      this.total = null;
    }
  }
}
