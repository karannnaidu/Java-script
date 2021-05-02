'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='CorrectNumber!';
// document.querySelector('.number').textContent='13';
// document.querySelector('.score').textContent='20';
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretNumber =Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.number').textContent='?';

document.querySelector('.check').addEventListener('click',function(){
const guess= Number (document.querySelector('.guess').value);
console.log(guess);
if(!guess){
  displayMessage('No Number');
    //no input or 0 
}
else if(guess==secretNumber){
displayMessage('CorrectNumber!');
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
      if(score>highscore){
          highscore=score;
          document.querySelector('.highscore').textContent=highscore;
      }
    //when player wins
}

  
    else if(guess!=secretNumber){
    

        if(score>1){
            //document.querySelector('.message').textContent= guess > secretNumber ? 'Too Low!' : 'Too High!';
            displayMessage(guess > secretNumber ? 'Too Low!' : 'Too High!')
        score--;
        document.querySelector('.score').textContent=score;
 
        }
        else{
           displayMessage('GAME LOST!');
            document.querySelector('.score').textContent=0;
            //game lost
        }
        }

} )

//again
document.querySelector('.again').addEventListener('click',function(){

    let secretNumber =Math.trunc(Math.random()*20)+1;
    
    document.querySelector('.number').textContent='?';
        document.querySelector('.number').style.width='15rem';
    
        document.querySelector('.score').textContent=20;
        document.querySelector('body').style.backgroundColor='#222';
displayMessage('Start guessing...');
        document.querySelector('.guess').value='';
       
    })