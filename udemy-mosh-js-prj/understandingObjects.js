// understanding multiple concepts in JS Objects

// Factory method of initializing objects

function createCar(brand, model, type, engine, color){
  return {
    brand,
    model: model,
    type: type,
    engine,
    color
  }
}

let mercedez = createCar('Mercedez', 'C Class', 'Sedan', '3.5L', 'White');
let bmwX5 = createCar('BMW', 'X5', 'SUV AWD', '3.0L Turbo', 'Blue')
console.log(mercedez);
console.log(bmwX5);

// Constructor method of initializing objects

function Car(brand, model, type, engine, color) {
  this.brand = brand;
  this.model = model;
  this.type = type;
  this.engine = engine;
  this.color = color;
}

let audi = new Car('Audi', 'A6', 'Luxury Sedan', '3.0L Turbo', 'Black');
//let civic = Car.call({}, 'Honda','Civic', 'Entry Level Sedan', '2.0L IVHC', 'Gold');

console.log(audi);
//console.log(civic);

// traversing through an object

for(let attributes in mercedez){
  console.log('Mercedez: ', attributes + ' - ' + mercedez[attributes]);
}

for(let attributes of Object.keys(bmwX5)){
  console.log('bmwX5: ', attributes + ' - ' + bmwX5[attributes]);
}

for(let entry of Object.entries(audi)){
  console.log('audi: ', entry);
}
