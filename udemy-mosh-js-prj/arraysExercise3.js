let sourceArray = [1,2,3,3,4,3,5,5,6,5,4,5];
let sourceArrayMax = [6, 4, 11, 21, 9, 17];
// console.log('Before:' + sourceArray);
// let count = checkOccuranceEnhanced(sourceArray, 5);
// console.log(count);
// console.log('After:' + sourceArray);

let maxValue = checkMaxValue(sourceArrayMax);
console.log('Max value is ' + maxValue);

function checkOccurance(source, searchItem){
  let count = 0;
  for(let element of source){
    if(element === searchItem)
      count++;
  }
  return count;
}

function checkOccuranceEnhanced(source, searchItem){
  return source.reduce(function(accumulator, element){
    if(element === searchItem) {
      console.log('Match found');
      accumulator++;
      //console.log('accumulator is ' + accumulator);
    }
    return accumulator;
  }, 0)
}

function checkMaxValue(source){
  return source.reduce(function(max, element){
    if (element > max){
      max = element;
    }
    console.log('Element is ' + element + ' max is ' + max);
    return max;
  }, 0);
}
