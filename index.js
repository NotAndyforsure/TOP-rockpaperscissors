
//tally variables------------------------------------------------------------------------------------

var computer=0;
var user= 0;





//Computer choice generator--------------------------------------------------------------------------------

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














//win or lose conditions----------------------------------------------------------------------------------------------

function playerSelection(select){

  

  let choice=select.toUpperCase()
  let respc =getComputerChoice()
  let userScore=document.querySelector(".userscore")
  let pcScore=document.querySelector(".pcscore")




  showChoice(choice,respc)



  if(respc=== "ROCK" && choice==="PAPER"){


    user++
    userScore.textContent=user
    pcScore.textContent=computer
    winnerFinder()

 
  }else if(respc === "ROCK" && choice==="SCISSOR"){

  
    computer++
    userScore.textContent=user
    pcScore.textContent=computer
    winnerFinder()



  }else if(respc ==="PAPER" && choice ==="ROCK"){
  
    computer++
    userScore.textContent=user
    pcScore.textContent=computer
    winnerFinder()


  }else if(respc==="PAPER" && choice==="SCISSOR"){
 
  
    user++
    userScore.textContent=user
    pcScore.textContent=computer
    winnerFinder()
 

  }else if(respc=="SCISSOR" && choice==="ROCK"){

 
   user++
   userScore.textContent=user
   pcScore.textContent=computer
   winnerFinder()


  }else if(respc==="SCISSOR" && choice==="PAPER"){
  
    computer++
    userScore.textContent=user
    pcScore.textContent=computer
    winnerFinder()


  }else if(respc===choice){

    user++
    computer++
    userScore.textContent=user
    pcScore.textContent=computer
    winnerFinder()
  

  }else{

    user--
    userScore.textContent=user
    pcScore.textContent=computer

    console.log("Play wrong, lose a point!")

  }

}













//game engine----------------------------------------------------------------------

function game(){

  findName()

computer= 0
user= 0



}










//winner finder --------------------------------------------------------------------------------------------------------------
function winner(a,b){
  let btn=document.querySelector(".btn")
  let anounce=document.querySelector(".body>h1")
  let userImg=document.querySelector(".userimg>img")
  let pcImg=document.querySelector(".pcimg>img")
  let win=document.querySelector(".win")
  let lost=document.querySelector(".lost")

  if(a>b){
    lost.play()
    anounce.textContent="You lost!!!!"
    userImg.setAttribute("src","./images/default.jpg")
    pcImg.setAttribute("src","./images/default.jpg")
    btn.innerHTML=`<button class="btnreplay">Play()</button> `
    let btnReplay=document.querySelector(".btnreplay")
    btnReplay.addEventListener("click",gameStart)
   

  }else if(a<b){
    win.play()
    anounce.textContent="You win!!!!"
    userImg.setAttribute("src","./images/default.jpg")
    pcImg.setAttribute("src","./images/default.jpg")
    btn.innerHTML=`<button class="btnreplay">Play()</button> `
    let btnReplay=document.querySelector(".btnreplay")
    btnReplay.addEventListener("click",gameStart)
    btnPlay.addEventListener("click",gameStart)

  }
  
}


// winner finder condition-----------------------------------------------------------------------------------------------------------------
function winnerFinder(){

if(user >=5 || computer >= 5){
    

  winner(computer,user)
}

}











// game starter function-----------------------------------------------

let btnPlay=document.querySelector(".btnplay")

btnPlay.addEventListener("click",gameStart)






function gameStart(){
  let anounce=document.querySelector(".body>h1")
 
  anounce.textContent="RocK Paper Scissors Edition:"

  computer=0
  user=0
  let userScore=document.querySelector(".userscore")
  let pcScore=document.querySelector(".pcscore")
  userScore.textContent=user
  pcScore.textContent=computer

  findName()

  let btn=document.querySelector(".btn")

  




  btn.innerHTML=` 
                  <button class="btnrock">Rock</button> 
                  <button class="btnpaper">Paper</button>
                  <button class="btnscissor">Scissor</button>

                 `




  

  


  let btnRock=document.querySelector(".btnrock")
  let btnPaper=document.querySelector(".btnpaper")
  let btnScissor=document.querySelector(".btnscissor")


  btnRock.addEventListener("click",function(e){
 
    e.stopPropagation()

    playerSelection("ROCK")


  })




  btnPaper.addEventListener("click",function(e){

    e.stopPropagation()

    playerSelection("paper")


  })




  btnScissor.addEventListener("click",function(e){


    e.stopPropagation()

    playerSelection("scissor")

  })



}




















// name finder-------------------------------------------------------------------------


function findName(){

  let name=prompt("Please enter your name here:")
  let userh=document.querySelector(".userh")
  userh.textContent=name

}












// Choice shower-------------------------------------------------------------------------------------------
function showChoice(choice,respc){

  let userImg=document.querySelector(".userimg img");
  let pcImg=document.querySelector(".pcimg img");

  switch(choice){
    
    

      case "ROCK":
      userImg.setAttribute("src","./images/rock.jpg")
      break;

      case "PAPER":
      userImg.setAttribute("src","./images/paper.jpg")
      break;

      case "SCISSOR":
      userImg.setAttribute("src","./images/scissor.jpg")
      break;




  }



  switch(respc){

    case "ROCK":
      pcImg.setAttribute("src","./images/rock.jpg")
      break;

      case "PAPER":
      pcImg.setAttribute("src","./images/paper.jpg")
      break;

      case "SCISSOR":
      pcImg.setAttribute("src","./images/scissor.jpg")
      break;




  }


}















































