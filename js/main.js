'use strict'

{
  function addZero(num){
    if (num < 10) {
      return "0" + num;
    }else{
      return num;
    }
  }


  let i=0;

  function clock() {
    let time = new Date();
    let month = addZero(time.getMonth());
    let day = [ "日", "月", "火", "水", "木", "金", "土" ][time.getDay()];
    let date = addZero(time.getDate());
    let hour = addZero(time.getHours());
    let min = addZero(time.getMinutes());
    let sec = addZero(time.getSeconds());
    let ret1 = month+1 + "/" + date + " (" + day + ")";
    let ret2 = hour + ":" + min + ":" + sec;
    document.getElementById('Japan1').textContent = ret1;
    document.getElementById('Japan2').textContent = ret2;
    console.log(i);
    i += 1;
  }



  setInterval(clock,1000);


}





























