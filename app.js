let title = document.querySelector('h1');

let scoreOne = document.querySelector('.score-1 p');
let scoreTwo = document.querySelector('.score-2 p');



let buttonOne = document.querySelector(".score-1 button");
let buttonTwo = document.querySelector(".score-2 button");
let score1 = 0;
let score2 = 0;


buttonOne.addEventListener("click", drawNumber1);
buttonOne.addEventListener("click", titleUpdate );


buttonTwo.addEventListener("click", drawNumber2);
buttonTwo.addEventListener("click",titleUpdate);







function titleUpdate (){
    if( score1 === score2 ){
      title.textContent = " ! MYSZEK !";
    }
    else if( score1 < score2 ){
      title.textContent = " Michał WINS!";
    }else{
      title.textContent = "Dominisia WINS!";
    }};

function drawNumber1(){
    let randomNumber1 = Math.floor(Math.random()*6 +1);
    let displayScoreOne = scoreOne.textContent = randomNumber1;
    score1 = displayScoreOne;
    return score1;
    
};
function drawNumber2(){
    let randomNumber2 = Math.floor(Math.random()*6 +1);
    let displayScoreTwo = scoreTwo.textContent = randomNumber2;
    score2 = displayScoreTwo;
    return score2;
};









