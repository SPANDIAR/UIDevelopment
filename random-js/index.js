function Circle(radius){
  this.radius = radius;
  this.area = function(){
    return Math.PI * this.radius * this.radius;
  }
}


//const myCircle = new Circle(3);
//const myCircle = Circle.call(this, 3);
//const areaOfMyCircle = myCircle.area();
//console.log('Area is : ' + areaOfMyCircle);
//console.log(this);

function Shape(){
  console.log('this is: ' + this);
  //this.circle = Circle.call(this, 3);
  this.circle = new Circle(3);
  console.log('Circle is ' + this.circle);
  //console.log('Area is: ' + this.circle.area());
}

new Shape();
