var app = {
  btnList: {},
  timer: document.getElementsByClassName('timer')[0],
  startTime: new Date().getTime(),
  currentTime: new Date().getTime(),
  interval: undefined,

  startTimer: function(time){
    app.startTime = Math.ceil(new Date().getTime() + time);
    clearInterval(app.interval);
    app.interval = setInterval(function() {
       app.currentTime = new Date().getTime();
       app.time = app.convertMillToString(app.startTime - app.currentTime);
       console.log('Counting down: ' + app.time);
       app.timer.innerHTML = app.time;
       
       if(app.time == '0:0')
          clearInterval(app.interval);
    }, 500);
 }
}