function StopWatch() {
  let startTime;
  let endTime;
  let running;
  let difference = 0;

  this.start = function(){
    if(running){
      throw Error ('Stopwatch running already');
    }
    startTime = new Date();
    running = true;
  }

  this.stop = function(){
    if(!running) {
      throw Error('Stopwatch is not running');
    }
    endTime = new Date();
    running = false;
    difference = (endTime.getTime() - startTime.getTime()) / 1000;
  }

  Object.defineProperty(this, 'duration', {
    get: function(){ return difference; }
  })

  this.reset = function(){
      startTime = null;
      endTime = null;
      running = false;
      difference = 0;
  }
}

let sWatch = new StopWatch();
