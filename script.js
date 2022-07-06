const scoreJoueur1 = document.getElementById("SJ1display");
const scoreJoueur2 = document.getElementById("SJ2display");
const NGbutton = document.getElementById("NGbutton");
const RDbutton = document.getElementById("RDbutton");
const Hbutton = document.getElementById("Hbutton");
const DVdisplay= document.getElementById("DVdisplay");
const SJ1display = document.getElementById("SJ1display");
const SJ2display = document.getElementById("SJ2display");
const pointToWin = document.getElementById("pointToWin")
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var playerInGame = 1;
var totalOngoing = 0;

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
     if (totalOngoing != 0){   
        if (playerInGame === 1){
            playerInGame = 2;
            scorePlayer1 = scorePlayer1 + totalOngoing
            totalOngoing = 0;
        }
        else if (playerInGame === 2){
            playerInGame = 1;
            scorePlayer2 = scorePlayer2 + totalOngoing
            totalOngoing = 0;
        }
        updateDisplay();
     }
     else{
        alert('Why do you want to win 0 ? Roll the dice first')
    }
})

function activateAllButton(){
    RDbutton.disabled = false;
    NGbutton.disabled = false;
    Hbutton.disabled = false;
}

function deactivateAllButton(){
    RDbutton.disabled = true;
    NGbutton.disabled = true;
    Hbutton.disabled = true;
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

function selectRandomNumber(){
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function animatingDice(){
    deactivateAllButton();
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
    setTimeout(()=>{activateAllButton()}, 2700);
}

function updateDisplay(){
    SJ1display.innerHTML = scorePlayer1;
    SJ2display.innerHTML = scorePlayer2;
    pointToWin.innerHTML = totalOngoing;
}

