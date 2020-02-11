/*
Game page
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*
Default positioning for player 1
*/
var circleX1 = 1125;
var circleY1 = 725;

/*
Default positioning for player 1
*/
var circleX2 = 1125;
var circleY2 = 725;

/*
Retrieve player info from first page
*/
var firstPlayer1 = sessionStorage.getItem("playerUno");
var secondPlayer2 = sessionStorage.getItem("playerDos");

/*
Launch initial game page
*/
draw();


/*
The game
*/
function draw() {
    /*
    Player 1 game piece
    */
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
    /*
    Player 2 game piece
    */
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "#000000";
    ctx.font = "15px Arial";
    ctx.arc(circleX2, circleY2, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeText(secondPlayer2, circleX2 - 20, circleY2);
    ctx.stroke();
    
    /*
    The board
    */
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

    six();
    console.log("Dico: " + dico);
    console.log("Dicolini: " + dicolini);
    console.log(trapo)
    
    //console.log("Trapo.length: " + trapo.length);
    
      /* Checking for traps 
    ----------------------*/
    if ((circleX1 === 825) && (circleY1 === 725) && (trapo.length === dicolini) /*&& (trapo.length === 2||1)*/) {
        trap1();
        var audio =     document.getElementById("myAudioTrap");
        audio.play();
        trapo = [];
    } else if ((circleX2 === 825) && (circleY2 === 725  ) && (trapo.length === dicolini) /*&& (trapo.length === 2||1)*/) {
        trap1();
    }
    if ((circleX1 === 825 - 150) && (circleY1 === 725 - 150 ) && trapo.length === dicolini) {
        trap2();   
        var audio = document.getElementById("myAudioTrap");
        audio.play();
        trapo = [];
    } else if((circleX2 === 825 - 150) && (circleY2 === 725 - 150) && trapo.length === dicolini) {
        trap2();
    }
    
      /* If player gets 6
    --------------------*/
    function six() {
        if (dicolini === 6 && dicolini === trapo.length) {
            console.log("six!")
            if (player1game.length > player2game.length) {
                console.log("six if")
                document.getElementById("six").innerHTML = "<p>You (" + firstPlayer1 + ") got a six, therefore you get to throw the dice one more time!</p>";
                player1game.shift()
                
            } else if (player1game.length === player2game.length) {
                console.log("six else")
                document.getElementById("six").innerHTML = "<p>You (" + secondPlayer2 + ") got a six, therefore you get to throw the dice one more time!</p>";
                
                player2game.shift();
            }
        }
    } 
}

    /* Dice and game
    -----------------*/
var trapo = [];
var dicolini = "";
var dico = dicolini;
var player1game = [];
var player2game = [];
var diceNumber = "";

function dice() {
     /* Player 1
    -----------------*/
    if (player1game.length === player2game.length) {
        document.getElementById("turn").innerHTML = "   <p>Next up: Player two/" + secondPlayer2 + "    </p>"
        player1game.push(1);
        trapo = [];
        var dico = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";
        for (var i = 0; i < dico; i++) {
            ilini = i + 1;
            diceNumber = i + 1;       
            dicolini = dico;
            if ((circleX1 >= 76) && (dico + 1 !== diceNumber)) {
                setTimeout(() => {
                movePlayer();
            }, i * 500)
                
        } else if (circleX1 === 75 && dico + 1 !==  diceNumber) {
            setTimeout(() => {
                movePlayer();
                trapo = [];   
            }, i * 500)
        }    
        function movePlayer() {
            if (circleX1 >= 76) {
                trapo.push(i);
                circleX1 = circleX1 - 150;
                draw();
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
               }
        }
        }

    } 
    /* Player 2
    -----------------*/
    else if (player1game.length > player2game.length) {
    document.getElementById("turn").innerHTML = "<p>Next up: Player one/" + firstPlayer1 + "</p>"
        player2game.push(1);
        trapo = [];
        var dico = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";
            for (var i = 0; i < dico; i++) {
                ilini = i + 1;
                diceNumber = i + 1;
                dicolini = dico;
                if ((circleX1 >= 76) && (dico + 1 !== diceNumber)) {
                    setTimeout(() => {
                        movePlayer()
                    }, i * 500)
                } else if (circleX1 === 75 && dico + 1  !== diceNumber) {
                    setTimeout(() => {
                        movePlayer(); 
                        trapo = []; 
                    }, i * 500)
                }    
                function movePlayer() {
                    if (circleX2 >= 76) {
                        trapo.push(i);
                        circleX2 = circleX2 - 150;
                        draw();
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
                    }
                }
            }
    } /*if (player1game[0] === 111 && player2game === [])
    { player1game = [] ;
     player2game = [];
    } */
    
}


    /* Traps!
    ----------*/

function trap1() {
    /* Player 1 trap 1
    ----------------------*/
    if (player1game.length > player2game.length) {
        setTimeout(() => {   document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
            alert("It's a trap! Move back one square");
            circleX1 = circleX1 + 150;
            trapo = [];
            draw();
        }, 100);
        
    } 
    /* Player 2 trap 1 
    ----------------------*/
    else if (player1game.length === player2game.length) {
        setTimeout(() => {
            document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
            alert("It's a trap! Move back one square");
            circleX2 = circleX2 + 150;
            trapo = [];
            draw();
        }, 100);
    }
}
 function trap2() {
     /* Player 1 trap 2
    ----------------------*/
     if (player1game.length > player2game.length && circleX1 === 1125 - 450 && circleY1 === 725 - 150 || player1game.length === player2game.length && circleX1 === 1125 - 450 && circleY1 === 725 - 150) {
         setTimeout(() => {
             document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
             alert("It's a trap! Move back three squares");
             circleX1 = circleX1 + 450;
             trapo = [];
             draw();
         }, 100);
     } 
     /* Player 2 trap 2
    ----------------------*/
     else if (player1game.length === player2game.length && circleX2 === 1125 - 450 && circleY2 === 725 - 150 || player1game.length > player2game.length && circleX2 === 1125 - 450 && circleY2 === 725 - 150) {
         setTimeout(() => {
             document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
             alert("It's a trap! Move back three squares");
             circleX2 = circleX2 + 450;
             trapo = [];
             draw();
         }, 100);
     }
 }