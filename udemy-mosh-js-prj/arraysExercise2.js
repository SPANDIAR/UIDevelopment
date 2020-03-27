
sourceArray = [1, 3, 2, 4, 5];
console.log('Source Array: ' + sourceArray);

movePositions(sourceArray,2,-2);

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

    let elementToMove = output.splice(elementIndex, 1);
    output.splice(elementIndex + offset, 0, elementToMove);

    console.log('Rearranged Array is: ' + output);
}
