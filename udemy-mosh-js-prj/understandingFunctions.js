// Function Declarations and Function Expressions

// Function Declaration

sayHello(); // possible because of hosting

function sayHello(){
  console.log('Hello, from Declaration');
}

var sayHelloFolks = function() {
  console.log('Hello Folks - from Expression');
  console.log('Arguments are: ');
  console.log(arguments);
};

//sayHelloFolks('Hi', 'the world', 'is possesed', 'with Corona');

// multiple arguments with the "rest" operator

let restFunction = function(...args){
  console.log('arguments are ');
  args.forEach(item => console.log(item));
};

//restFunction('check', 'if this', 'works');

// getters and setters examples

function familyMembers (fName, lName, who){
  return family = {
    fName,
    lName,
    who,
    get fullName(){
      return `${this.fName + ' ' + this.lName}`;
    }
  }
};

let dad = familyMembers('Pandi', 'Natarajan', 'Saami Thatha');
let son = familyMembers('Shankee', 'Pandi', 'Dude');
//console.log(dad.fullName);
//console.log(son);

// Dont use var - why?

function randomFunction(){
  for(let i=0;i<5;i++){
    console.log(i);
    var j = i;
  }
  //console.log(i);
  console.log(j); // j gets printed even though its outside of its scope. its because its a var
}

//randomFunction();

// this keyword and related stuff

let car = {
  brand: 'Audi',
  model: 'A6',
  engine: '3.5L Turbo',
  AWD: false,
  features: ['leather seats', 'acc', '6 airbags', 'bluetooth audio'],
  get printFeatures(){
    //let self = this;
    this.features.forEach(function(feature){
      //console.log(self.brand + ' ' + feature);
      console.log(this.brand + ' ' + feature);
    }, this)
  },
  printFeaturesLambda: function(){
    this.features.forEach(feature => console.log(this.brand + ' ' + feature));
  }
};


//console.log(car);
console.log(car.printFeatures);
console.log(car.printFeaturesLambda());
