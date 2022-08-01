function getComputerChoice(){

  const generator =Math.floor(Math.random()*3);
  
  switch(generator){
    case 0:
      return "Rock!"
      break;
      case 1:
        return "Paper!"
        break;
        case 2:
          return "Scissor!"
          break;

  }
  
}
console.log(getComputerChoice())
