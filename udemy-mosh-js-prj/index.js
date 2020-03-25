console.log('this message is from my js file');

const status = checkSpeed(50);
console.log(status);

function checkSpeed(speed) {
  const speedLimit = 70;

  if (speed - speedLimit <= 4)
    return 'ok';
  else {
    let excessSpeed = speed - speedLimit;
    let speedingTicketPoint = Math.floor(excessSpeed / 5);
    if (speedingTicketPoint >= 12)
      return 'Licence Suspended';
    else
      return speedingTicketPoint;
  }
}
