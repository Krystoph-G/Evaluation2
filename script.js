const scoreJoueur1 = document.getElementById("SJ1display");
const scoreJoueur2 = document.getElementById("SJ2display");
const NGbutton = document.getElementById("NGbutton");
const RDbutton = document.getElementById("RDbutton");
const Hbutton = document.getElementById("Hbutton");
const DVdisplay= document.getElementById("DVdisplay");
const SJ1display = document.getElementById("SJ1display");
const SJ2display = document.getElementById("SJ2display");
const pointToWin = document.getElementById("pointToWin")
var scorePlayer1 = 10;
var scorePlayer2 = 29;
var playerInGame = 1;
var totalOngoing = 0;
var timeOut1;
var timeOut2;
var timeOut3;
var timeOut4;
var timeOut5;
var timeOut6;
var timeOut7;
var timeOut8;
var timeOut9;

function cancelTimer(){
    clearTimeout(timeOut1)
    clearTimeout(timeOut2)
    clearTimeout(timeOut3)
    clearTimeout(timeOut4)
    clearTimeout(timeOut5)
    clearTimeout(timeOut6)
    clearTimeout(timeOut7)
    clearTimeout(timeOut8)
    clearTimeout(timeOut9)
}

function rollingDice(){
    let diceValue = selectRandomNumber();
    animatingDice();
    timeOut9 = setTimeout(()=>{
        DVdisplay.innerHTML = diceValue;
        if(diceValue != 1){
            pointToWin.innerHTML = totalOngoing
        }
    }, 2700)
    return diceValue
}

function selectRandomNumber(){
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const animatingDice = new Promise((resolve, reject) => {
    let listNumber = [1, 2, 3, 4, 5, 6];
    listNumber.sort(function() {return .5 - Math.random();}); //Melange le tableau listNumber 
    DVdisplay.innerHTML = listNumber[0];
    timeOut1 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[1]}, 300);
    timeOut2 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[2]}, 600);
    timeOut3 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[3]}, 900);
    timeOut4 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[4]}, 1200);
    timeOut5 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[5]}, 1500);
    timeOut6 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[2]}, 1800);
    timeOut7 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[4]}, 2100);
    timeOut8 = setTimeout(()=>{DVdisplay.innerHTML = listNumber[1]}, 2400);


})

function updatePlayerScore(){
    SJ1display.innerHTML = scorePlayer1;
    SJ2display.innerHTML = scorePlayer2;
}

function updatePointToWin(){
    pointToWin.innerHTML = totalOngoing;
}

RDbutton.addEventListener('click', () => {
    let diceValue = rollingDice();
    if (diceValue === 1){ // à tester
        totalOngoing = 0;
        if (playerInGame === 1){
            playerInGame = 2;
        }
        else if (playerInGame === 2){
            playerInGame = 1;
        }
    }
    else if (diceValue != 1)
    {
        totalOngoing = totalOngoing + diceValue;
    }
    setTimeout(()=>{pointToWin.innerHTML = totalOngoing}, 2700)
})



Hbutton.addEventListener('click', () => { //A decommenter dès les tests du clear timeout fait 
    if (playerInGame === 1){
        playerInGame = 2;
    }
    else if (playerInGame === 2){
        playerInGame = 1;
    }
})
