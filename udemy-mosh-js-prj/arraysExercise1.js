console.log(arrayFromRange(-6, 9));

inputArrayVar = [1,2,3,4];
console.log('Search result is ' + myIncludesLogic(inputArrayVar, 5));

let mySourceArray = [1,7,2,3,4,3,5,6,2];
let myfilerList = [3, 5];
let output = myOwnExceptImplementation(mySourceArray,myfilerList);

console.log('My Filtered Array is ' + output);

function arrayFromRange(min, max){
  resultArray = [];
  for(let i=min; i<=max;i++){
    resultArray.push(i);
  }
  return resultArray;
}


function myIncludesLogic(inputArray, searchElement){
    return (inputArray.indexOf(searchElement) >= 0);
}

function myOwnExceptImplementation(sourceArray, filterElementsArray){
  let filteredArray = [];
  for(let element of sourceArray) {
    if(filterElementsArray.indexOf(element) === -1){
      filteredArray.push(element);
    }
  }
  return filteredArray;
}
