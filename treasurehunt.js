//alert("Click on ❓to find treasure 🪙.")
var randomWin = Math.floor(Math.random() * 19)
var randomLose = Math.floor(Math.random() * 19)
console.log(randomWin)
console.log(randomLose)
const treasureFinder = (id) => {
    console.log("id")
    console.log(id)
    if(randomWin === id){
        console.log("you found the treasure")
        document.getElementById(id).innerHTML="💰"
        setTimeout(()=>{
            alert("you found the treasure, you win")    
        }, 1000)
        //alert("you found the treasure, you 
    } 
    else if (randomLose === id){
    console.log("you found the bomb")
    document.getElementById(id).innerHTML="💣"
        setTimeout(()=>{
            alert("you found a bomb, you lose")    
        }, 1000)
    }   
    else {
        console.log("no bomb or treasure")
        document.getElementById(id).innerHTML="🏴‍☠️"
    }
}



