
sourceArray = [1, 3, 2, 4, 5];
console.log('Source Array: ' + sourceArray);

movePositions(sourceArray,1,5); // [1, 3, 5, 2, 4]
//movePositions(sourceArray,2,-2); // [2, 1, 3, 5, 4]
//movePositions(sourceArray,1,3); // [2, 1, 3, 5, 4]

function movePositions(source, elementIndex, offset){
  let output = [...source];
  if((elementIndex >= source.length) ||
    (elementIndex + offset < 0) ||
    (elementIndex + offset >= source.length)
    )
    {
          console.error('Invalid offsets');
          return;
    }


    let elementToMove = source[elementIndex];
    let newPosition = elementIndex + offset;
    console.log(elementToMove + ' ' + newPosition);

    if(offset > 0) {
      output.splice(newPosition+1, 0, elementToMove);
      output.splice(elementIndex, 1);
    }
    else if (offset < 0){
      output.splice(newPosition, 0, elementToMove);
      output.splice(elementIndex+1, 1);
    }

    console.log('Rearranged Array is: ' + output);
}
