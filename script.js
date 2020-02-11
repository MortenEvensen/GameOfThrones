/*
Character page
*/

document.getElementById("john").addEventListener("click", john);
document.getElementById("ned").addEventListener("click", ned);
document.getElementById("danny").addEventListener("click", danny);
var pushi = 1;
var characters = [];

var player1 = [];
var player2 = [];
console.log("player 1: " + player1);
var playercount = [];



//sessionStorage.setItem("player1" ,player1[0])
//sessionStorage.setItem("player2" ,player2[0])
/*function clickOnPlayer() {
    if () {
        john();
    }
    else if () {
             
             }
     
}*/



var jon = document.getElementById("john"); 
var ned = document.getElementById("ned");
var danny = document.getElementById("danny"); 

function john() {
    var name = "Jon Snow"
    if (player1.length === 0 && player2.length === 0) {
    if (jon.classList.contains("chosen") === true) {
       
       // jon.classList.remove("chosen");
    } else {
       // jon.classList.add("chosen"); 
      //  jon.style.opacity = "0.5";
    //    jon.style.boxShadow = "0px 0px black";
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + name + "</p><p>Do you want to play as " + name + "?</p><button onclick='johnYes()'>Yes!</button><button onclick='johnNo()'>No...</button>"
    }
    } else if (player1.length === 1 && player2.length === 0) {
        if (jon.classList.contains("chosen") === true) {
       
        jon.classList.remove("chosen");
    } else {
        jon.classList.add("chosen"); 
     //   jon.style.opacity = "0.5";
     //   jon.style.boxShadow = "0px 0px black";
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + name + "</p><p>Do you want to play as " + name + "?</p><button onclick='johnYes()'>Yes!</button><button onclick='johnNo()'>No...</button>"
    }
} else if (player1.length === 1 && player2.length === 1 ) {
        alert("Sorry, this game is for 2 players only!");
    }
}

function ned() {
    var name = "Ned Stark"
    if (player1.length === 0 && player2.length === 0) {
    
    if (ned.classList.contains("chosen") === true) {
       
        //ned.classList.remove("chosen");
    } else {
        //ned.classList.add("chosen"); 
     //   ned.style.opacity = "0.5";
    //    ned.style.boxShadow = "0px 0px black";
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + name + "</p><p>Do you want to play as " + name + "?</p><button onclick='nedYes()'>Yes!</button><button onclick='nedNo()'>No...</button>"
    } 
    } else if (player1.length === 1 && player2.length === 0) {
        if (ned.classList.contains("chosen") === true) {
       
        ned.classList.remove("chosen");
    } else {
        ned.classList.add("chosen"); 
     //   ned.style.opacity = "0.5";
     //   ned.style.boxShadow = "0px 0px black";
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + name + "</p><p>Do you want to play as " + name + "?</p><button onclick='nedYes()'>Yes!</button><button onclick='nedNo()'>No...</button>"
    }
    } else if (player1.length === 1 && player2.length === 1 ) {
        alert("Sorry, this game is for 2 players only!");
    }
}

function danny() {
     var name = "Daenerys Targaryan"
     if (player1.length === 0 && player2.length === 0) {
    if (danny.classList.contains("chosen") === true) {
       
       // danny.classList.remove("chosen");
    } else {
      //  danny.classList.add("chosen"); 
    //    danny.style.opacity = "0.5";
    //    danny.style.boxShadow = "0px 0px black";
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + name + "</p><p>Do you want to play as " + name + "?</p><button onclick='dannyYes()'>Yes!</button><button onclick='dannyNo()'>No...</button>"
    }
     } else if (player1.length === 1 && player2.length === 0) {
         if (danny.classList.contains("chosen") === true) {
       
        danny.classList.remove("chosen");
    } else {
        danny.classList.add("chosen"); 
       // danny.style.opacity = "0.5";
      //  danny.style.boxShadow = "0px 0px black";
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + name + "</p><p>Do you want to play as " + name + "?</p><button onclick='dannyYes()'>Yes!</button><button onclick='dannyNo()'>No...</button>"
    }
     } else if (player1.length === 1 && player2.length === 1 ) {
        alert("Sorry, this game is for 2 players only!");
    }
}

function johnNo() {
     jon.style.opacity = "1";
        jon.style.boxShadow = "5px 5px black" 
   // jon.classList.add("chosen");
    document.getElementById("player1").innerHTML = "";
    //john();
}
function johnYes() {
    if (player1.length === 0 && player2.length === 0) {
        player1.push("John Snow")
        document.getElementById("john").remove();
        document.getElementById("player1").innerHTML = "Player 1 has chosen " + player1[0] + "!"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        player2.push("John Snow");
        document.getElementById("john").remove();
        document.getElementById("player2").innerHTML = "Player 2 has chosen" + player2[0] + "!"
        document.getElementById("whichPlayer").innerHTML = ""
        play();
    }
}

function nedNo() {
    ned.style.opacity = "1";
    ned.style.boxShadow = "5px 5px black" 
   // ned.classList.add("chosen");
    document.getElementById("player1").innerHTML = "";
    //john();
}
function nedYes() {
    if (player1.length === 0 && player2.length === 0) {
        player1.push("Ned Stark")
        document.getElementById("ned").remove();
        document.getElementById("player1").innerHTML = "Player 1 has chosen " + player1 + "!"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        player2.push("Ned Stark");
        document.getElementById("ned").remove();
        document.getElementById("player2").innerHTML = "Player 2 has chosen " + player2 + "!"
        document.getElementById("whichPlayer").innerHTML = ""
        play();
    }
}

function dannyNo() {
    danny.style.opacity = "1";
    danny.style.boxShadow = "5px 5px black" 
   // danny.classList.add("chosen");
    document.getElementById("player1").innerHTML = "";
    //john();
}
function dannyYes() {
    if (player1.length === 0 && player2.length === 0) {
        player1.push("Daenerys Targaryan")
        document.getElementById("danny").remove();
        document.getElementById("player1").innerHTML = "Player 1 has chosen" + player1[0] + "!"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        player2.push("Daenerys Targaryan");
        document.getElementById("danny").remove();
        document.getElementById("player2").innerHTML = "Player 2 has chosen " + player2[0] + "!"
        document.getElementById("whichPlayer").innerHTML = ""
        play();
    }
}

function play() {
    if (player1.length === 1 && player2.length === 1) {
    document.getElementById("play").innerHTML = "<button onclick='save()'><a href='game.html'>Lets play!</a></button>"
        console.log(player1[0]);
        console.log(player2[0]);
        
    }
};

function save() {
    sessionStorage.setItem("playerUno", player1);
    sessionStorage.setItem("playerDos", player2)
}

function see() {
    console.log("Player1: " + player1.length);
    console.log("Player2: " + player2.length);
}

/*
function john() {
    var name = "John";
    if (jon.classList.contains("chosen") === true) {
        jon.classList.remove("chosen")
        nedNo();
        johnNo();
        dannyNo();
        //remove
        //characters.shift();
        //player1.shift();
        //console.log(characters);
        
    } else {
       jon.classList.add("chosen")   
       jon.style.opacity = "0.5";
       jon.style.boxShadow = "0px 0px black";
       //characters.push(pushi);
       //console.log(characters);
       //console.log("Player 1: " + player1[0])
       //check(); 
       
        document.getElementById("first").innerHTML = "<p>Do player 1 want to play as " + name +  "?</p>" + "<button onclick='jonhYes()'>Yes</button>" + "<button onclick='johnNo()'>No</button>";
}
   
    }
function ned() {
    var name = "Ned Stark";
    if (ned.classList.contains("chosen") === true) {
        ned.classList.remove("chosen");
        nedNo();
        johnNo();
        dannyNo();
        //characters.shift();
        
       // console.log(characters);
       
    } else {
       ned.classList.add("chosen")   
       ned.style.opacity = "0.5";
       ned.style.boxShadow = "0px 0px black";
       //characters.push(pushi);
       //player1.push("Ned")
       //console.log(player1)
       //console.log(characters);
       //check()
       
        document.getElementById("first").innerHTML = "<p>You want to play as " + name + "?</p>" + "<button onclick='nedYes()'>Yes</button>" + "<button onclick='nedNo()'>No</button>";
}
    }
function danny() {
   var name = "Daenerys Targaryan";
    if (danny.classList.contains("chosen") === true) {
        danny.classList.remove("chosen")
  nedNo();
        johnNo();
        dannyNo();
   } else {
    danny.classList.add("chosen")   
    danny.style.opacity = "0.5";
    danny.style.boxShadow = "0px 0px black";
       //characters.push(pushi);
       //player1.push("Danny")
       //console.log(characters);
      // check()
       john()
        ned()
        document.getElementById("first").innerHTML = "<p>You want to play as " + name + "?</p>" + "<button onclick='dannyYes()'>Yes</button>" + "<button onclick='dannyNo()'>No</button>";
}
    }
//console.log("length: " + player1)

 
function jonhYes() {
    if (player1.length === 0) {
        player1.push("John Snow")
        playercount.push(1);
        document.getElementById("player1").innerHTML = "Player one has chosen John Snow"
        document.getElementById("first").innerHTML = "Player two choose second!"
        jon.remove();
        document.getElementById("player1").innerHTML = "<p>Player One has chosen John Snow!"
    }
     else if (player1.length === 1) {
         player2.push("John Snow")
         playercount.push(1);
         document.getElementById("player2").innerHTML = "Player two has chosen John Snow"
         document.getElementById("first").innerHTML = ""
     }
}
function johnNo() {
     document.getElementById("first").innerHTML = ""; 
    jon.style.opacity = "1";
        jon.style.boxShadow = "5px 5px black" 
        jon.classList.remove("chosen");
    document.getElementById("first").innerHTML = ""
        //john();
    }
function nedYes() {
    if (player1.length === 0) {
       player1.push("Ned Stark")
       playercount.push(1);
       document.getElementById("player1").innerHTML = "Player one has chosen Ned Stark"
        document.getElementById("first").innerHTML = "Player two choose second!"
        ned.remove();
        document.getElementById("player1").innerHTML = "<p>Player One has chosen Ned Stark!"    
    } else if (player1.length === 1) {
         player2.push("Ned Stark")
       playercount.push(1);
       document.getElementById("player2").innerHTML = "Player two has chosen Ned Stark"
        document.getElementById("first").innerHTML = ""
    }
    }
 function nedNo() {
     document.getElementById("first").innerHTML = ""; 
     ned.style.opacity = "1";
        ned.style.boxShadow = "5px 5px black" 
        ned.classList.remove("chosen");
       document.getElementById("first").innerHTML = ""
     
        //ned();
    }
 
function dannyYes() {
    if (player1.length === 0) {
       player1.push("Danerys Targaryan")
       playercount.push(1);
       document.getElementById("player1").innerHTML = "Player one has chosen Danerys Targaryan"
        danny.remove();
        document.getElementById("first").innerHTML = "Player two choose second!"
       
    } else if (player1.length === 1) {
         player2.push("Daenerys Targaryan")
       playercount.push(1);
       document.getElementById("player2").innerHTML = "Player two has chosen Daenerys Targaryan"
        document.getElementById("first").innerHTML = ""
        
    }
    }
function dannyNo() {
     document.getElementById("first").innerHTML = "";  
      danny.style.opacity = "1";
    danny.style.boxShadow = "5px 5px black" 
    danny.classList.remove("chosen");
       // characters.shift();
        console.log(characters);
        document.getElementById("first").innerHTML = ""
    }



function check() {
if (playercount.length >= 3) {
    characters = [];
    alert("Maximum 2 players!");
    danny();
    ned();
    john();
    
}
}

*/


