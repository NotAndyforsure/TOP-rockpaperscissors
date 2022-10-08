
//tally variables

var computer=0
var user= 0



//Computer rock paper scissor generator

function getComputerChoice(){

  const generator =Math.floor(Math.random()*3);
  
  switch(generator){
    case 0:
      return "ROCK"
      break;
      case 1:
        return "PAPER"
        break;
        case 2:
          return "SCISSOR"
          break;

  }
  
}




//win or lose conditions

function playerSelection(select){

  let choice=select.toUpperCase()
let respc =getComputerChoice()

console.log("You: " + choice)
console.log(`computer: ${respc}`)


if(respc=== "ROCK" && choice==="PAPER"){
  
  user++
 
}else if(respc === "ROCK" && choice==="SCISSOR"){
  
 computer++

}else if(respc ==="PAPER" && choice ==="ROCK"){
  
computer++

}else if(respc==="PAPER" && choice==="SCISSOR"){
 
  
  user++
 

}else if(respc=="SCISSOR" && choice==="ROCK"){
 
  user++

}else if(respc==="SCISSOR" && choice==="PAPER"){
  
 computer++

}else if(respc===choice){

  user++

  computer++
  

}else{

  user--

  console.log("Play wrong, lose a point!")

}

}


//game starter function

function game(){
 
computer= 0
user= 0
for(let i= 0; i < 5; i++){

let select=prompt("Rock Paper or scissor")
playerSelection(select)

}

console.log(winner(computer,user))
}



//winner finder function
function winner(a,b){

return a === b? ` That's tie!!!!!!!!!!!!. to play again write game()`:a>b? ` Computer:${a}   You: ${b}. You LOSE!!!!!!!!!`:` Computer:${a}  You: ${b}. You SAVED THE WORLD CHOSEN ONE!!!!!!!!`

}

game()








