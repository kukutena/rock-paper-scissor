
  let random = ['rock','paper','scissor'];
  let i;
  let j=1;
  let winnercount=0;
  let computercount=0
  let userchoice; 
  let lowercaseuserchoice;
  let computerSelection;
  let playerSelection;
 
  
function computerplay(){       
      i= Math.floor(Math.random() * 3);      
      return random[i]   
        }
        

function userinputchecker(){      
       
          userchoice = prompt ('please enter your selection from rock, paper and scicssor');
          lowercaseuserchoice =userchoice.toLowerCase();
            //alert(lowercaseuserchoice);
        while ((lowercaseuserchoice!=='rock')&& (lowercaseuserchoice!=='scissor')&&(lowercaseuserchoice!=='paper')) {
               console.log('you entered wrong selection. please try again')
                userchoice = prompt('please enter your selection from rock, paper and scicssor');
                 }
                   
                 return lowercaseuserchoice;                 
      
      } 
  
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


}

  


function game(){
  while(j<=5){
    computerSelection=computerplay();
    playerSelection =userinputchecker();  
    console.log(computerSelection);
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    j++;
  }
     

  if (winnercount>computercount) {
        console.log('you are the winner, you scored', winnercount/(winnercount+computercount));
  } else {
    console.log('game over you lost for ', computercount ,'to' ,(winnercount+computercount));
  }
}



game();

















