
  let random = ['rock','paper','scissor'];
  let i;
  let j=1;
  let winnercount=0;
  let computercount=0;
  let userchoice; 
  let lowercaseuserchoice;
  let computerSelection;
  let playerSelection;
  let count=0;
 
  
function computerplay(){       
      i= Math.floor(Math.random() * 3);      
      return random[i]   
        }
        

//function userinputchecker(){      
       
                
      
   //   } 
  
function playRound(playerSelection, computerSelection){
  
    if (playerSelection===computerSelection) {
           console.log(playerSelection, computerSelection, 'same choice');     
           
    }else if(playerSelection==='paper' && (computerSelection==='rock')) {
               console.log( 'yey You win, paper beats rock');
               winnercount++;
    }else if(playerSelection==='paper' && (computerSelection==='scissor')){
                 console.log('YOU LOOSE scissor cuts paper');
                 computercount++
    }else if(playerSelection==='rock' && (computerSelection==='scissor')){
                 console.log( 'yey You win,rock crushes scissor');
                 winnercount++;
    }else if(playerSelection==='rock' && (computerSelection==='paper')){
               console.log('YOU LOOSE paper beats rock');
               computercount++
    }else if(playerSelection==='scissor' && (computerSelection==='paper')){
                console.log('Yey you WIN scissor cuts paper');
                 winnercount++;
    }else{
              console.log('YOU LOOSE rock crushes scissor');   
              computercount++            
    }

    count++;
}

  
const buttons = document.querySelectorAll('button');
//alert('click your choice');
function game(){
  //count=0;
  alert('play rock scissor paper');
  buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
    playerSelection= button.id;
    computerSelection=computerplay();
    console.log(computerSelection);
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    if (count===5){
      gamewinner();
    }
    });
  });

}

function gamewinner(){
 // while(j<=5){
    
    //computerSelection=computerplay();
    //playerSelection =userinputchecker();  
    //console.log(computerSelection);
    //console.log(playerSelection);
    //playRound(playerSelection, computerSelection);
    //j++;
  //}
     

  if (winnercount>computercount) {
      console.log('you are the winner, you scored', winnercount ,'out of',
      (winnercount+computercount));
  }else if(winnercount=computercount){
            console.log('your score',winnercount,'is equal with computer score',computercount);
  } else {
   console.log('game over you lost for ', computercount ,'to' ,
   (winnercount+computercount));
  }

  winnercount=0;
  computercount=0;
  count=0;
  x=prompt('do you wana play again? (Y/N)');
 if(x==='Y'||x==='y'){
       game();
  }
  else{
    alert('good luck for next time');
  }

  
}




game();

















