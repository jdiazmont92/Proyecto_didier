var countDownDate = new Date("Oct 1, 2019 00:00:00").getTime();

var x = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.getElementById("Count").innerHTML = days + "Días " + hours + "Horas "
  + minutes + "Minutos " + seconds + "Segundos ";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Count").innerHTML = "EXPIRED";
  }
}, 1000);