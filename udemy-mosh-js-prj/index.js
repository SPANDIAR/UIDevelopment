console.log('this message is from my js file');

printStars(6);

function printStars(count){
  let star;
  for(let i=1; i<=count; i++){
    star='';
    for(let j=1; j<=i; j++) {
      star += '*';
    }
    console.log(star);
  }
}
