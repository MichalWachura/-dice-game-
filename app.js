let title = document.querySelector('h1');

let scoreOne = document.querySelector('.score-1 p');
let scoreTwo = document.querySelector('.score-2 p');




let buttonOne = document.querySelector(".score-1.button");
let buttonTwo = document.querySelector(".score-2.button");



let displayScoreOne = scoreOne.textContent = randomNumber1;
let displayScoreTwo = scoreTwo.textContent = randomNumber2;




function drawNumber1(){
    let randomNumber1 = Math.floor(Math.random()*6 +1);
    return randomNumber1;
};
function drawNumber2(){
    let randomNumber2 = Math.floor(Math.random()*6 +1);
    return randomNumber2;
};

buttonOne.addEventListener("click", drawNumber1);
buttonTwo.addEventListener("click", drawNumber2);