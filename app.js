let x;
let distance = 28800000;
let running, timeSet, h, m, s;
let input = document.getElementById("setTime");



  input.addEventListener("keypress",function(event){
    if(event.keyCode === 13 || event.which === 13) {
      if (input.value == ""){
        alert("Input correct numbers!");
        timeSet = false;
      } else {
        timeSet = true;  
        input.removeEventListener;
      }
        
      if (timeSet === true) {
        console.log(input.value);
      
        h = setTime.value.substring(0,2);
        m = setTime.value.substring(3,5);
        s = setTime.value.substring(6,8);

        distance = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
      } 

      console.log(h);
      console.log(m);
      console.log(s);
      console.log(distance);
      
    }
   
  });
  


function init() {
  console.log('init');
  document.getElementById("start").removeEventListener("click", init);
  document.getElementById("start").classList.add("grey");
  document.getElementById("pause").addEventListener("click", pause); 
  document.getElementById("pause").innerHTML = "PAUSE";
  document.getElementById("timeSetting").classList.add("hide");
  running = true;


  // Update the count down every 1 second
  x = setInterval(function() {

    // Time calculations for hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = hours + "h  "
    + minutes + "m  " + seconds + "s  ";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "FREEDOM!!!";
    } 

    // Subtract 1 second every time function is invoked
    distance -=1000;

  },1000);

};

//Pause the timer
function pause() {
  if(running) {
    clearInterval(x); 
    console.log("paused");
    document.getElementById("pause").innerHTML = "CONTINUE";

    document.getElementById("pause").removeEventListener("click", pause);
    document.getElementById("pause").addEventListener("click", cont);
    running = false;
  }
  

};

function cont() {
  if(running === false) {
      console.log('continued');
      init();
  } 
}

document.getElementById("start").addEventListener("click", init);

// Reload the page while clear is clicked
document.getElementById("clear").addEventListener("click", function(){
      location.reload(true);
});



