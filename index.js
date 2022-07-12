let seconds = 00;
let tens = 00;
let minutes = 00;
let hours = 00;
let outputHours = document.getElementById('hour');
let outputMinutes = document.getElementById('minute');
let outputSeconds = document.getElementById('second');
let outputTens = document.getElementById('tens');
let buttonStart = document.getElementById('btn-start');
let buttonStop = document.getElementById('btn-stop');
let buttonReset = document.getElementById('btn-reset');
let Interval;

buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10)
});

buttonStop.addEventListener('click', () =>{
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () =>{
    clearInterval(Interval);
    tens ="00";
    seconds ="00";
    minutes ="00";
    hours = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
    outputMinutes.innerHTML = minutes;
    outputHours.innerHTML = hours;

});

function startTime(){
    tens++;
    if(tens <= 0){
        outputSeconds.innerHTML= "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;

    }
    if (tens > 99){
        seconds += 1;
        outputSeconds.innerHTML ='0' + seconds;
        tens= 0;
        outputTens.innerHTML = '0' + tens;
        
    
    }

     if (seconds > 9){
     outputSeconds.innerHTML = seconds;
    }

    if( seconds > 59){
        minutes++ ;
        outputMinutes.innerHTML = '' + minutes;
        seconds = 0;
        tens= 0;
        outputTens.innerHTML = '0' + tens;      
    }
     
    
}
 