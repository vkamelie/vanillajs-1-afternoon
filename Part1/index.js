console.log("yo dude")

var kit = []
var count = 0
function play (turn)  {
    const player = document.getElementById('player')
    const player2 = document.getElementById(turn)

 if(player.innerText == "X"){
     player.innerText = 'O'
     player2.innerText = 'X'
     kit[turn]= "X"
  } 
  else {
    player.innerText = "X"
    player2.innerText  = "O"
    kit[turn] = "O"
  }
  console.log(kit)
 
}
let sq1 = kit[0]
let sq2 = kit[1]
let sq3 = kit[2]
let sq4 = kit[3]
let sq5 = kit[4]
let sq6 = kit[5]
let sq7 = kit[6]
let sq8 = kit[7]
let sq9 = kit[8]



  if(kit[0] !== undefined && kit[1] == kit[0] && kit[1] == kit[2]){
    window.alert(`${kit[0]} winner! `) 
  }
 if(kit[3] !== undefined && kit[4] == kit[3] && == kit[4] == kit[5]){
   window.alert(`${kit[3]} winner!`)
 }
 if(kit[6] !== undefined && kit[7] == kit[6] && kit[7] == kit[8]){
   window.alert(`${kit[6]} winner`)
 }





