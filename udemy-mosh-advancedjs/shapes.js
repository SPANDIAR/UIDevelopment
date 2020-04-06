function Shape(shapeType){
  this.shapeType = shapeType;
}

Shape.prototype.area = function(length, breadth){
  return (length * breadth);
};

function Square(shapeType){
  Shape.call(this, shapeType);
}

function Rectangle(shapeType){
  Shape.call(this, shapeType);

  this.whoAmI = function(){
    console.log('I am a rectangle');
  }
}


Square.prototype = Object.create(Shape.prototype);
//Square.prototype.constructor = Square;
Square.prototype.whoAmI = function(){
  console.log('I am a square');
};

Rectangle.prototype = Object.create(Shape.prototype);

let sq1 = new Square('Square');
let sq2 = new Square.prototype.constructor;
let rec1 = new Rectangle('Rectangle');
//console.log('Area of sq1 is ' + sq1.area(5, 5));
