var app = {
  btnList: {},
  timer: document.getElementsByClassName('timer')[0],
  startTime: new Date().getTime(),
  currentTime: new Date().getTime(),
  interval: undefined,
  init: function() {
     var btns = document.getElementsByClassName('btn');
     for (var i = 0; i < btns.length; i++) {
        this.initButton(btns[i]);
     }
  },
  initButton(btn) {
     this.btnList[btn.id] = {
        ele: btn,
        show: function() {
           this.ele.style.display = '';
        },
        hide: function() {
           this.ele.style.display = 'none';
        }
     }
     btn.addEventListener('click', function() {
        console.log(this.id);
        app[this.id]();
     });
  },
  btnStart: function() {
     app.startTimer(1500000);
  },
  btnBreak: function(){
     app.startTimer(300000);
  },
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
  },
  convertMillToString: function(milliseconds) {
     var totalSeconds = Math.floor(milliseconds / 1000);
     var totalMinutes = Math.floor(totalSeconds / 60);

     //Return Values
     var hours = Math.floor(totalMinutes / 60);
     var minutes = Math.floor(totalMinutes - (hours * 60));
     var seconds = Math.floor(totalSeconds - (totalMinutes * 60));
     return minutes + ':' + seconds;
  }
}

app.init();