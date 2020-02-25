/*
Game page
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var circleX1 = 1125;
var circleY1 = 725;

var circleX2 = 1125;
var circleY2 = 725;

var firstPlayer1 = sessionStorage.getItem("playerUno");
var secondPlayer2 = sessionStorage.getItem("playerDos");

console.log("HHHEIIII: " + firstPlayer1);
console.log("Huskeuujsad: " + secondPlayer2);

draw();

document.getElementById("player1").innerHTML = "<p>Player one is: " + firstPlayer1 + "</p>";
document.getElementById("player2").innerHTML = "<p>Player one is: " + secondPlayer2 + "</p>";

//var firstPlayer = player1
//var secondPlayer = sessionStorage.getItem("player2")


//document.getElementById("player1").innerHTML = "<p>Player one is: " + sessionStorage.getItem("player1");
//document.getElementById("player2").innerHTML = "<p>Player one is: " + secondPlayer;

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
     ctx.fillStyle = "blue";
    ctx.strokeStyle = "#000000";
    ctx.font = "10px Arial";
    ctx.arc(circleX1, circleY1, 40, 0, 2 * Math.PI);
   
    ctx.fill();
    ctx.beginPath();
    
    
    ctx.strokeText(firstPlayer1, circleX1 - 20,circleY1);
    ctx.stroke();
    
    
    
     ctx.beginPath();
    ctx.fillStyle = "red";
     ctx.strokeStyle = "#000000";
    ctx.font = "15px Arial";
    ctx.arc(circleX2, circleY2, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeText(secondPlayer2, circleX2 - 20, circleY2);
    
    ctx.stroke();
    
    
    
    ctx.beginPath();
    ctx.rect(1050, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("1", 1055, 675);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("2", 1055 - 150, 675);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("3", 1055 - 150 - 150, 675);
    ctx.rect(800, 700, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("4", 1055 - 150 - 150 - 150, 675);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("5", 1055 - 150 - 150 - 150 - 150, 675);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("6", 1055 - 150 - 150 - 150 - 150 - 150, 675);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("7", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 675);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("8", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 675);
    ctx.stroke();

    // Line 2

    ctx.beginPath();
    ctx.rect(1050, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("9", 1055, 675 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("10", 1055 - 150, 675 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("11", 1055 - 150 - 150, 675 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("12", 1055 - 150 - 150 - 150, 675 - 150);
    ctx.rect(650, 550, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("13", 1055 - 150 - 150 - 150 - 150, 675 - 150);
    
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("14", 1055 - 150 - 150 - 150 - 150 - 150, 675 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("15", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 675 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("16", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 675 - 150);
    ctx.stroke();

        if ((circleX1 === 825) && (circleY1 === 725) && (trapo.length === dicolini) && (trapo.length === 2||1)) {
        nyFunction();
        console.log("trapo.length: " + trapo.length);
        console.log("dicolini: " + dicolini);
        console.log("HURRA!" );
        
        var audio = document.getElementById("myAudioTrap");
        audio.play();
        trapo = [];
    } else if ((circleX2 === 825) && (circleY2 === 725 ) && (trapo.length === dicolini) && (trapo.length === 2||1)) {
         nyFunction();
    }
    /*if (diceNumber === 1 && circleX === 1125 - 150 && circleY === 725 && trapo.length === dicolini)  {
             trapo = [];
             }  */ 
     if ((circleX1 === 825 - 150) && (circleY1 === 725 - 150 ) && trapo.length === dicolini) {
         nyFunction2();
         console.log("trapo.length: " + trapo.length);
         console.log("dicolini: " + dicolini);
         console.log("HURRA!" );
        
         var audio = document.getElementById("myAudioTrap");
         audio.play();
         trapo = [];
     } else if((circleX2 === 825 - 150) && (circleY2 === 725 - 150) && trapo.length === dicolini) {
         nyFunction2()
     }
    
}

/* function clickolini() {
    console.log(circleX);
    console.log(circleY);
      console.log(trap);
    if (circleX === 975 && trap.length - 1 === trap) {
        draw();
        setTimeout(()=> {document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
        alert("It's a trap! Move back one square")
        },200);
    } 
    
    if (circleX >= 76) {
        circleX = circleX - 150;
        draw();
        var audio = document.getElementById("myAudio");
        audio.play();
        }
    else if (circleX === 75) {
        //console.log(circleX);
        circleX = 1125;
        circleY = circleY - 150;
        draw();
        var audio = document.getElementById("myAudio");
        audio.play();
        }   
}
*/


console.log(trapo)
var diceNumber = "";

var x  = 1125 - 300;
var y = 725;

var ilini = "";
var dicolini = ""



var player1game = [];
var player2game = [];

function dice() {

    //console.log("Player1: " + player1[0])
     //console.log("Player2: " + player2[0])
    if (player1game.length == player2game.length) {
        document.getElementById("turn").innerHTML = "<p>Next up: Player two/" + secondPlayer2 + "</p>"
        player1game.push(1);
    trapo = [];
    var dico = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";

    for (var i = 0; i < dico; i++) {
        ilini = i + 1;
        diceNumber = i + 1;
        
        
        dicolini = dico;
        //console.log("dico: " + dico)
        
        if ((circleX1 >= 76) && (dico + 1 !== diceNumber)) {
            setTimeout(() => {
                clickolini();
                //trapo[i] = trapo;
                //trapo.push();
        console.log("Trapo.length: " + trapo.length)
                console.log("Trapo: " + trapo)
                console.log("dicolini: " + dicolini)
            }, i * 500)
                six();
        } else if (circleX1 === 75 && dico + 1 !== diceNumber) {
            setTimeout(() => {
                clickolini();
                
            }, i * 500)
            six();
        }    
        function clickolini() {
            if (circleX1 >= 76) {
                trapo.push(i);
                circleX1 = circleX1 - 150;
                draw();
                // console.log("ilini: " + ilini);
                //    console.log("dicolini: " + dicolini);
                //  console.log("trapo: " + trapo);
                var audio = document.getElementById("myAudio");
                audio.play();        
            }
               else if (circleX1 === 75) {
                   trapo.push(i);
                circleY1 = circleY1 - 150;
                circleX1 = 1125;
                draw();
                var audio = document.getElementById("myAudio");
                audio.play()
                console.log("KlikkY!");
            }
        }
    }

} else if (player1game.length > player2game.length) {
   document.getElementById("turn").innerHTML = "<p>Next up: Player one/" + firstPlayer1 + "</p>"
    player2game.push(1);
    var dico = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";

    for (var i = 0; i < dico; i++) {
        ilini = i + 1;
        diceNumber = i + 1;
        
        
        dicolini = dico;
        //console.log("dico: " + dico)
        
        if ((circleX1 >= 76) && (dico + 1 !== diceNumber)) {
            setTimeout(() => {
                clickolini();
                //trapo[i] = trapo;
                //trapo.push();
        console.log("Trapo.length: " + trapo.length)
                console.log("Trapo: " + trapo)
                console.log("dicolini: " + dicolini)
            }, i * 500)
            six()
        } else if (circleX1 === 75 && dico + 1 !== diceNumber) {
            setTimeout(() => {
                clickolini();
                
            }, i * 500)
            six();
        }    
        function clickolini() {
            if (circleX2 >= 76) {
                trapo.push(i);
                circleX2 = circleX2 - 150;
                draw();
                // console.log("ilini: " + ilini);
                //    console.log("dicolini: " + dicolini);
                //  console.log("trapo: " + trapo);
                var audio = document.getElementById("myAudio");
                audio.play();        
            }
               else if (circleX2 === 75) {
                   trapo.push(i);
                circleY2 = circleY2 - 150;
                circleX2 = 1125;
                draw();
                var audio = document.getElementById("myAudio");
                audio.play()
                console.log("KlikkY!");
            }
        }
    }
}
    
    function six() { 
        
    if (dico === 6 && dicolini === trapo.length) {
        if (player1game.length > player2game.length) { document.getElementById("six").innerHTML = "<p>You (" + firstPlayer1 + ") got a six, therefore you get to throw the dice one more time!</p>";
            player1game = [];
            player2game = [];
        } else if (player1game.length === player2game.length) { document.getElementById("six").innerHTML = "<p>You (" + secondPlayer2 + ") got a six, therefore you get to throw the dice one more time!</p>";
            player1game = [1];
            player2game = [];
        }
    } 
}
}