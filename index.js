function getComputerChoice(){

  const generator =Math.floor(Math.random()*3);
  
  switch(generator){
    case 0:
      return "ROCK!"
      break;
      case 1:
        return "PAPER!"
        break;
        case 2:
          return "SCISSOR!"
          break;

  }
  
}

function playerSelection(select){

  let choice=select.toUpperCase()
let respc =getComputerChoice()
console.log("You: " + choice)

if(respc===select){
  return "It's a tie"
}else if(respc=== "ROCK!" && choice==="PAPER"){
  console.log("PC: "+respc)
  return "You win!!! Paper beats rock"
}else if(respc === "ROCK!" && respc==="SCISSOR"){
  console.log("PC:" + respc)
return "You lose!!! Rock beats Scissors"
}else if(respc ==="PAPER!" && choice ==="ROCK"){
  console.log("PC:" + respc)
  return "You lose!! Paper beats rock"
}else if(respc==="PAPER!" && choice==="SCISSOR"){
  console.log("PC:" + respc)
  return "you win!! Scissor beats paper"
}else if(respc=="SCISSOR!" && choice==="ROCK"){
  console.log("PC: " +respc)
  return "You win!! Rock beats scissor"
}else if(respc==="SCISSOR!" && choice==="PAPER"){
  console.log("PC: " + respc)
  return "You lose!! Scissor beats paper anyday"

}else{
  console.log("PC: " + respc)
  return "I'ts a tie!!!!!"
}
}


