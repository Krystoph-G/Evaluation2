const scoreJoueur1 = document.getElementById("SJ1display");
const scoreJoueur2 = document.getElementById("SJ2display");
const NGbutton = document.getElementById("NGbutton");
const RDbutton = document.getElementById("RDbutton");
const Hbutton = document.getElementById("Hbutton");
const DVdisplay= document.getElementById("DVdisplay");
const SJ1display = document.getElementById("SJ1display");
const SJ2display = document.getElementById("SJ2display");
const pointToWin = document.getElementById("pointToWin")
var scorePlayer1 = 45;
var scorePlayer2 = 45;
var playerInGame = getRandomInt(2);
var totalOngoing = 0;

RDbutton.addEventListener('click', () => {
    let diceValue = rollingDice();
    if (diceValue === 1){ // à tester
        totalOngoing = 0;
        if (playerInGame === 0){
            playerInGame = 1;
        }
        else if (playerInGame === 1){
            playerInGame = 0;
        }
    }
    else if (diceValue != 1)
    {
        totalOngoing = totalOngoing + diceValue;
    }
    setTimeout(()=>{pointToWin.innerHTML = totalOngoing}, 2700)
})



Hbutton.addEventListener('click', () => { 
     if (totalOngoing != 0){   
        if (playerInGame === 0){
            playerInGame = 1;
            scorePlayer1 = scorePlayer1 + totalOngoing
            totalOngoing = 0;
        }
        else if (playerInGame === 1){
            playerInGame = 0;
            scorePlayer2 = scorePlayer2 + totalOngoing
            totalOngoing = 0;
        }
        updateDisplay();
        if (scorePlayer1 >= 50){
            alert("Player 1, you win !!!")
            deactivateButton("RD");
            deactivateButton("H");
        }
        else if (scorePlayer2 >= 50){
            alert("Player 2, you win !!!")
            resetScore();
            deactivateButton("RD");
            deactivateButton("H");
        }
     }
     else{
        alert('Why do you want to win 0 ? Roll the dice first')
    }
})

NGbutton.addEventListener('click', () => {
    resetScore();
    updateDisplay();
    activateButton("allButton");
})

function resetScore(){
    playerInGame = getRandomInt(2);
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    totalOngoing = 0;
}

function activateButton(buttonIHM){
    if (buttonIHM == "RD"){
        RDbutton.disabled = false;
    }
    else if (buttonIHM == "NG"){
        NGbutton.disabled = false;
    }
    else if (buttonIHM == "H"){
        Hbutton.disabled = false;
    }
    else if (buttonIHM == "allButton"){
        RDbutton.disabled = false;
        NGbutton.disabled = false;
        Hbutton.disabled = false;
    }
}

function deactivateButton(buttonIHM){
    if (buttonIHM == "RD"){
        RDbutton.disabled = true;
    }
    else if (buttonIHM == "NG"){
        NGbutton.disabled = true;
    }
    else if (buttonIHM == "H"){
        Hbutton.disabled = true;
    }
    else if (buttonIHM == "allButton"){
        RDbutton.disabled = true;
        NGbutton.disabled = true;
        Hbutton.disabled = true;
    }
}

function rollingDice(){
    let diceValue = selectRandomNumber();
    animatingDice();
    setTimeout(()=>{
        DVdisplay.innerHTML = diceValue;
        if(diceValue != 1){
            pointToWin.innerHTML = totalOngoing
        }
    }, 2700)
    return diceValue
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function selectRandomNumber(){
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function animatingDice(){
    deactivateButton("allButton");
    let listNumber = [1, 2, 3, 4, 5, 6];
    listNumber.sort(function() {return .5 - Math.random();}); //Melange le tableau listNumber 
    DVdisplay.innerHTML = listNumber[0];
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[1]}, 300);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[2]}, 600);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[3]}, 900);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[4]}, 1200);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[5]}, 1500);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[2]}, 1800);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[4]}, 2100);
    setTimeout(()=>{DVdisplay.innerHTML = listNumber[1]}, 2400);
    setTimeout(()=>{activateButton("allButton")}, 2700);
}

function updateDisplay(){
    SJ1display.innerHTML = scorePlayer1;
    SJ2display.innerHTML = scorePlayer2;
    pointToWin.innerHTML = totalOngoing;
}

