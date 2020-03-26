let mixedArrayAddition = [3, 4, 6, 7];
let scrambledArray = [6, 5, 8, 3, 1, 15, 13];

let arrayToCombine1 = ['hello folks', 'check this out'];
let arrayToCombine2 = ['I\'m learning JS'];

let arrayToLearnRemoval = [1, 4, 'apple', 'sierra', 'middle', 'egg', 'water', 'a', 6];


let familyArray = [
  {
    who: 'dad',
    fName: 'Shankee',
    lName: 'Pandi',
    age: 38
  },
  {
    who: 'mom',
    fName: 'Karthi',
    lName: 'Ravee',
    age: 33
  },
  {
    who: 'kiddo',
    fName: 'Tannu',
    lName: 'Shankee',
    age: 7
  },
  {
    who: 'paati',
    fName: 'Eswari',
    lName: 'Pandi',
    age: 68
  },
  {
    who: 'nephew',
    fName: 'Harsha',
    lName: 'Jai',
    age: 9
  }
];


console.log(mixedArrayAddition);

// Add elements to an array

console.log('Add elements to an array');

//Add elements to the middle
mixedArrayAddition.splice(2, 0, 5);

// Add elements to the front
mixedArrayAddition.unshift(1, 2);

// Add elements to the back
mixedArrayAddition.push(8, 9);

console.log(mixedArrayAddition);

// Remove elements from  an array

console.log('Remove elements from  an array');
console.log(arrayToLearnRemoval);

// remove from end
arrayToLearnRemoval.pop();
console.log(arrayToLearnRemoval);

// remove from front
arrayToLearnRemoval.shift();
console.log(arrayToLearnRemoval);

// remove from middle
arrayToLearnRemoval.splice(3, 1);
console.log(arrayToLearnRemoval);

// Find elements in an array
console.log('Find elements in an array');

console.log('Position of search string is ' + mixedArrayAddition.indexOf(5));
console.log(mixedArrayAddition.includes(10));

// Searching in an array by reference
console.log('Searching an array by reference - find Eswari')
console.log(
familyArray.find(function(family){
   return (family.fName === 'Eswari') ;
}));

// Sorting Arrays By Reference

console.log('Sorting Arrays By Reference');
console.log(scrambledArray);
console.log(scrambledArray.reverse());
console.log(scrambledArray.sort(function(num, next){
    if(num < next) return -1;
    if(num > next) return 1;
    if(num = next) return 0;
}));

console.log(familyArray);
familyArray.sort(function(member1, member2){
  if(member1.lName > member2.lName) return 1;
  if(member1.lName < member2.lName) return -1;
  if(member1.lName = member2.lName) return 0;
});


// Lambda's in JS
console.log('Lambda\'s in JS');

familyArray.forEach(function(member) {
  console.log(member.lName);
});

familyArray.forEach(member => console.log(member.fName + ' ' + member.who));


// cloning an array
console.log('cloning an array');

let familyArrayClone1 = [...familyArray];
console.log(familyArrayClone1);

// Combining 2 arrays

console.log('Combining 2 arrays');
let combinedArray1 = arrayToCombine1.concat(arrayToCombine2);
let combinedArray2 = [...arrayToCombine1, ...arrayToCombine2, 'hopefully i\'ll master it'];
console.log(combinedArray1);
console.log(combinedArray2);


// empty an array
console.log('Empty an array');
//console.log(familyArray);
//console.log(familyArrayClone1);

//familyArrayClone1.length = 0;
//familyArray = [];
//familyArray.splice(0, familyArray.length);
