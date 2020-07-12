var secs = 0;
var time;
var timerOn = 0;
var timeReverse;
var secsReverse = 30;
var timerOnReverse = 0;

function timer() {
    if(secs>29){
        document.getElementById("timer").innerHTML = secs;
        return;
    }

    document.getElementById("timer").innerHTML = secs;
    secs++;
    time = setTimeout(timer,1000);
}

function startTimer() {
    if(!timerOn){
        timerOn = 1;
        timer();
    }
}

function stopTimer() {
    clearTimeout(time)
    timerOn = 0;
}

function resetTimer() {
    secs = 0;
    document.getElementById("timer").innerHTML = secs;
    stopTimer();
}

function timerReverse() {
    if(secsReverse<1){
        document.getElementById("timerReverse").innerHTML = secsReverse;
        return;
    }

    document.getElementById("timerReverse").innerHTML = secsReverse;
    secsReverse--;
    timeReverse = setTimeout(timerReverse,1000);
}

function startTimerReverse() {
    if(!timerOnReverse){
        timerOnReverse = 1;
        timerReverse();
    }
}

function resetTimerReverse() {
    secsReverse = 30;
    document.getElementById("timerReverse").innerHTML = secsReverse;
    stopTimerReverse();
}

function stopTimerReverse() {
    clearTimeout(timeReverse)
    timerOnReverse = 0;
}