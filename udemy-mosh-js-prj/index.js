console.log('this message is from my js file');

const output = fizzBuzz(22);
console.log(output);

function fizzBuzz(input){
  //console.log(typeof(input));
  if(typeof(input) !== 'number') return 'Not a number';
  else if ((input % 3 === 0) && (input % 5 === 0)) return 'fizzBuzz';
  else if(input % 3 === 0) return 'Fizz';
  else if(input % 5 === 0) return 'Buzz';
  else return input;
}
