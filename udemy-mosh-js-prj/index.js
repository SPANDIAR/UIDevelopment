console.log('this message is from my js file');

const arrayElements = [1, 4, 'Shankee', 'Hello', '', null, 7, undefined, 10, false, true];
console.log(countTruthy(arrayElements));

function countTruthy(inputArray) {
  let truthyCount = 0;
  for(let element of inputArray) {
    //console.log(index + ' - ' + inputArray[index])
    if(element)
      truthyCount++;
    }
    return truthyCount;
}
