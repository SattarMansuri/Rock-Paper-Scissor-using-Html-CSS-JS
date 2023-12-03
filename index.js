//Rules Area
const Rules = document.querySelector('.section')
const RuleBtn = document.querySelector('.rules')
const CancelBtn = document.querySelector('.Cancel')

RuleBtn.addEventListener('click', (a)=>{
    Rules.style.display = "block";
    })
CancelBtn.addEventListener('click', (b)=>{
    Rules.style.display = "none";
    })

    //Player Select Area
    let line = document.querySelector('.line')
    let Rock = document.querySelector('#Rock')
    let Scissors = document.querySelector('#Scissors')
    let Paper = document.querySelector('#Paper')
    let Your;

    function RockCliked(){
        Your = "Rock"
        Rock.style.display = "block"
        Rock.style.position = "relative"
        Rock.style.top = "9.5vh"
        Rock.style.right = "4vw"
        Scissors.style.display = "none"
        Paper.style.display = "none"
        line.style.display = "none"
        CompShow()
      }
      function ScissorsClicked(){
        Your = "Scissors"
        Scissors.style.display = "block"
        Scissors.style.position = "relative"
        Scissors.style.top = "10vh"
        Scissors.style.right = "31vw"
        Rock.style.display = "none"
        Paper.style.display = "none"
        line.style.display = "none"
        CompShow()
      }
      function PaperClicked(){
        Your = "Paper"
        Paper.style.display = "block"
        Paper.style.position = "relative"
        Paper.style.bottom = "25vh"
        Paper.style.right = "18vw"
        Scissors.style.display = "none"
        Rock.style.display = "none"
        line.style.display = "none"
        CompShow()
      }
Rock.addEventListener('click', RockCliked)
Scissors.addEventListener('click', ScissorsClicked)
Paper.addEventListener('click', PaperClicked)

// Computer Select Area
const Choices = ["Rock", "Paper", "Scissors"]
let CompRock = document.querySelector('.CompShowRock')
let CompPaper = document.querySelector('.CompShowPaper')
let CompScissors = document.querySelector('.CompShowScissors')
let PlayAgain = document.querySelector('.Play')
let PC;

function CompShow(){
  CompChoice = Choices[Math.floor(Math.random() * 3)];
  return CompChoose()
}

function CompChoose(){
    if(CompChoice == "Rock"){
     PC = "Rock"
     CompRock.style.visibility = "visible"
     PlayAgain.style.display = "block"
     return winner()
     
    }
    else if(CompChoice == "Paper"){
     PC = "Paper"
     CompPaper.style.visibility = "visible"
     PlayAgain.style.display = "block"
     return winner()
    }
    else{
      PC = "Scissors"
     CompScissors.style.visibility = "visible"
     PlayAgain.style.display = "block"
     return winner()
    }
  }

  // Cheking the Winner Area
   let Display;
  
  function winner(){
    if(Your == "Rock" && PC == "Rock"){
      console.log("Tie Up");
      Display = "Tie"
      ScoreBoard()
    }
    else if(Your == "Rock" && PC == "Scissors"){
      console.log("You Won");
      Display = "Win"
      ScoreBoard()
    }
    else if(Your == "Rock" && PC == "Paper"){
      console.log("You Lost");
      Display = "Lost"
      ScoreBoard()
    }
    else if(Your == "Paper" && PC == "Paper"){
      console.log("Tie Up");
      Display = "Tie"
      ScoreBoard()
    }
    else if(Your == "Paper" && PC == "Rock"){
      console.log("You Won");
      Display = "Win"
      ScoreBoard()
    }
    else if(Your == "Paper" && PC == "Scissors"){
      console.log("You Lost");
      Display = "Lost"
      ScoreBoard()
    }
    else if(Your== "Scissors" && PC == "Scissors"){
      console.log("Tie Up");
      Display = "Tie"
      ScoreBoard()
    }
    else if(Your == "Scissors" && PC == "Paper"){
      console.log("You Won");
      Display = "Win"
      ScoreBoard()
    }
    else if(Your == "Scissors" && PC == "Rock"){
      console.log("You Lost");
      Display = "Lost"
      ScoreBoard()
    }
    }


 //Changes after Winning/Loosing  Area
// let CompScoreIs = document.querySelector(".pcScore")

let countPlayer = 0
let countComp = 0
// let storedComp;
// let StoredPlayer;

let YouWin = document.querySelector('.win')
let YouLost = document.querySelector('.lost')
let Tie = document.querySelector('.tie')


let Updated = document.querySelector('.score')

let NextBtn = document.querySelector('.next')
let WinCircle = document.querySelector('.WinCircle')

let score = JSON.parse(localStorage.getItem("sc"))
let CompScore = document.querySelector(".pcScore")
if(score){
  CompScore.innerText = score;
}

let pScore = JSON.parse(localStorage.getItem("self"))
let PlayerScore = document.querySelector(".playerScore")

if(pScore){
  PlayerScore.innertext = pScore;
 
  }

function ScoreBoard(){
      if(Display == "Tie"){
        Tie.style.display = "block"
      }
      
      else if(Display == "Win"){
        YouWin.style.display = "block"
        NextBtn.style.visibility = "visible"
        WinCircle.style.visibility = "visible"
        countPlayer = pScore
        countPlayer++;
        PlayerScore.innerText = countPlayer
        localStorage.setItem("self", JSON.stringify(countPlayer))
      }
      else if(Display == "Lost"){
        YouLost.style.display = "block"
        WinCircle.style.visibility = "visible"
        WinCircle.style.position = "absolute"
        WinCircle.style.left = "37vw"
        countComp = score
        countComp++;
        CompScore.innerText = countComp
        localStorage.setItem("sc", JSON.stringify(countComp))
      }
    }


  