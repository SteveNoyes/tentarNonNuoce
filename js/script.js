var app = {
  btnList: {},
  timer: document.getElementsByClassName('timer')[0],
  startTime: new Date().getTime(),
  currentTime: new Date().getTime(),
  interval: undefined
}