var mydiv = document.querySelector('div'),
    secs = 3700;

function count() {
  var mins = Math.floor(secs / 60),
      remsec = secs % 60,
      hours = Math.floor(mins / 60);
      
  mins %= 60; 
  secs -= 1 
    
  if (hours < 10) { 
    hours = "0" + hours 
  }
  
  if (mins < 10) { 
    mins = "0" + mins 
  }
  
  if (remsec < 10) {
    remsec = "0" + remsec
  }
  
  if (secs < 0) {
  
 clearInterval(sty)
}

    mydiv.textContent =  hours + ": " + mins + ": "  + remsec
}

var sty = setInterval(count, 1000)

$(".btnGo").on("click", function(){
    
})
$(".btnPause").on("click", function(){

})
$(".btnStop").on("click", function(){

})
$("btnClear").on("click", function(){

})

