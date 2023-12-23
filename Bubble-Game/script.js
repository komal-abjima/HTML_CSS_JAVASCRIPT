var timer = 60;
var score = 0;
var rhn = 0;

function scoreNumber(){
    score += 10;
    document.querySelector("#score").textContent = score;

}

function hitNumber(){
    rhn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rhn;
}

function makeBubble(){
    var clutter = "";
for(var i = 0; i<=151; i++){
    var rn = Math.floor(Math.random()* 10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    var timerint = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
            
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over..</h1>`
        }
    }, 1000);

}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === rhn){
      scoreNumber();
      makeBubble();
      hitNumber();
    }
})

hitNumber();
runTimer();
makeBubble();

