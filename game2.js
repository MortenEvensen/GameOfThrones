/*
Game page
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*
Default positioning for player 1
*/
var circleX1 = 1125;
var circleY1 = 725 + 105;

/*
Default positioning for player 1
*/
var circleX2 = 1125;
var circleY2 = 725 + 105;

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
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    
    /*
    The board
    */
     /*
   Bottom line
    */
    ctx.beginPath();
    ctx.rect(1050, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("1", 1055, 775);
    ctx.stroke();
    

    ctx.beginPath();
    ctx.rect(900, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("2", 1055 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("3", 1055 - 150 - 150, 775);
    ctx.rect(800, 700, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("4", 1055 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("5", 1055 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("6", 1055 - 150 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("7", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("8", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    // Line 2

    ctx.beginPath();
    ctx.rect(1050, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("9", 1055, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("10", 1055 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("11", 1055 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("12", 1055 - 150 - 150 - 150, 775 - 150);
    ctx.rect(650, 650, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("13", 1055 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("14", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("15", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("16", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

      /*
   Third line
    */
    ctx.beginPath();
    ctx.rect(1050, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("17", 1055, 775 - 300);
    ctx.stroke();
    

    ctx.beginPath();
    ctx.rect(900, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("18", 1055 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("19", 1055 - 150 - 150, 775 - 300);
    ctx.rect(800, 700, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("20", 1055 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("21", 1055 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("22", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("23", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("24", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    // Line 4

    ctx.beginPath();
    ctx.rect(1050, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("25", 1055, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("26", 1055 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("27", 1055 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("28", 1055 - 150 - 150 - 150, 775 - 450);
    ctx.rect(650, 650, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("29", 1055 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("30", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("31", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("32", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();
    
          /*
   Fifth line
    */
    ctx.beginPath();
    ctx.rect(1050, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("33", 1055, 775 - 600);
    ctx.stroke();
    

    ctx.beginPath();
    ctx.rect(900, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("34", 1055 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("35", 1055 - 150 - 150, 775 - 600);
    ctx.rect(800, 700, 50, 50)
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("36", 1055 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("37", 1055 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("38", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("39", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("40", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();
    
    /* Graphics/traps
    ------------------*/
    
    var imageStark = document.getElementById("starkSource");
    ctx.drawImage(imageStark, 155, 780, 130, 90)
    var imageLannister = document.getElementById("lannisterSource");
    ctx.drawImage(imageLannister, 470, 620, 100, 120)
    var imageVale = document.getElementById("valeSource");
    ctx.drawImage(imageVale, 620, 470, 110, 110)
    var imageBaratheon = document.getElementById("baratheonSource");
    ctx.drawImage(imageBaratheon, 925, 305, 100, 130)
    var imageTargaryan = document.getElementById("targaryanSource");
    ctx.drawImage(imageTargaryan, 760, 165, 120, 120)
    
    /*
    Player 1 game piece
    */
    
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
    
    
    console.log("Dico: " + dico);
    console.log("Dicolini: " + dicolini);
    console.log("Trapo:" + trapo)
    
   
    
      /* Checking for traps 
    ----------------------*/
    
     /* Trap 1 - Stark trap
    ----------------------*/
    if ((circleX1 === 225) && (circleY1 === 830) && (trapo.length === dicolini) /*&& (trapo.length === 2||1)*/) {
        trap1();
        var audio =     document.getElementById("myAudioTrap");
        audio.play();
        //trapo = [];
    } else if ((circleX2 === 225) && (circleY2 === 830  ) && (trapo.length === dicolini) /*&& (trapo.length === 2||1)*/) {
        trap1();
    }
     /* Trap 2 - Lannister trap
    ----------------------*/
    if ((circleX1 === 225 + 300) && (circleY1 === 830 - 150 ) && trapo.length === dicolini) {
        trap2();   
        var audio = document.getElementById("myAudioTrap");
        audio.play();
        //trapo = [];
    } else if((circleX2 === 225 + 300) && (circleY2 === 830 - 150) && trapo.length === dicolini) {
        trap2();
    };
    
}
 //console.log("Trapo.length: " + trapo.length);
    /* Dice and game
    -----------------*/
var trapo = [];
var dicolini = "";
var dico = dicolini;
var player1game = [1,1];
var player2game = [1,1];
var diceNumber = "";
//console.log("dicolini" + dicolini[0])
//console.log("trapo" + trapo[0])
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
                //trapo = [];   
            }, i * 500)
        }    
        function movePlayer() {
            if (circleX1 >= 76) {
                trapo.push(i);
                circleX1 = circleX1 - 150;
                draw();
                var audio = document.getElementById("myAudio");
                audio.play(); 
                six();
            }
               else if (circleX1 === 75) {
                   trapo.push(i);
                   circleY1 = circleY1 - 150;
                   circleX1 = 1125;
                   draw();
                   var audio = document.getElementById("myAudio");
                   audio.play()
                   six();
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
                        //trapo = []; 
                    }, i * 500)
                }    
                function movePlayer() {
                    if (circleX2 >= 76) {
                        trapo.push(i);
                        circleX2 = circleX2 - 150;
                        draw();
                        var audio = document.getElementById("myAudio");
                        audio.play(); 
                        six();
                    }
                    else if (circleX2 === 75) {
                        trapo.push(i);
                        circleY2 = circleY2 - 150;
                        circleX2 = 1125;
                        draw();
                        var audio = document.getElementById("myAudio");
                        audio.play()
                        six();
                    }
                }
            }
    }   
    /* If player gets 6
    --------------------*/
    function six() {
        if (dicolini === 6 && dicolini === trapo.length) {
            if (player1game.length >    player2game.length) {
                console.log("six if");               document.getElementById("six").innerHTML = "<p>You (" + firstPlayer1 + ")     got a six, therefore you get to throw   the dice one more time!</p>";
                player1game.shift();               
            } else if (player1game.length === player2game.length) {
                console.log("six else")
                document.getElementById("six").innerHTML = "<p>You (" + secondPlayer2 + ") got a six, therefore you get to throw the dice one more time!</p>";
                
                player2game.shift();
            }
        }
    } 
    
}
//firstPlayer1
//secondPlayer2

    /* Traps!
    ----------*/

function trap1() {
    /* Player 1 Stark trap as Stark player
    ----------------------*/
    if ((player1game.length > player2game.length) && ((firstPlayer1 === "John Snow") || (firstPlayer1 === "Ned Stark") || (firstPlayer1 === "Arya Stark")) && ((circleX1 === 225) && (circleY1 === 830))) {
        setTimeout(() => { 
            console.log("trap opt1")
           document.getElementById("trap1modal-wrap").style.display = "block"; document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + firstPlayer1 + " you are most welcome! The soliders lends you a horse, and you move forward 4 spaces!</p><button onclick='closeModal()'>Great!</button>";
            circleX1 = 1125 - 300;
            circleY1 = 830 - 150
            //trapo = [];
            draw();
        }, 100);  
         /* Player 1 Stark trap as non-Stark player
    ----------------------*/
    } else if ((player1game.length > player2game.length) && ((firstPlayer1 != "John Snow") || (firstPlayer1 != "Ned Stark") || (firstPlayer1 != "Arya Stark")) && ((circleX1 === 225) && (circleY1 === 830))) {
        setTimeout(() => {
            console.log("trap opt2")
            document.getElementById("trap1modal-wrap").style.display = "block"; 
            document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + firstPlayer1 + " you are not welcome here! The soliders chase you, and you move back 4 spaces!</p><button onclick='closeModal()'>I better run!</button>";
            
            circleX1 = circleX1 + 600;
            //trapo = [];
            draw();
        }, 100);
    }
    /* Player 2 Stark trap as Stark player
    ----------------------*/
    else if ((player1game.length === player2game.length) && ((secondPlayer2 === "John Snow") || (secondPlayer2 === "Ned Stark") || (secondPlayer2 === "Arya Stark")) && ((circleX2 === 225) && (circleY2 === 830 ))) {
        setTimeout(() => {  
            console.log("trap opt3")
           document.getElementById("trap1modal-wrap").style.display = "block"; document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + secondPlayer2 + " you are most welcome! The soliders lends you a horse, and you move forward 4 spaces!</p><button onclick='closeModal()'>Great!</button>";
            circleX2 = 1125 - 300;
            circleY2 = 830 - 150
            //trapo = [];
            draw();
        }, 100);  
    /* Player 2 trap as non-Stark player 
    ----------------------*/
    } else if ((player1game.length === player2game.length) && ((secondPlayer2 != "John Snow") || (secondPlayer2 != "Ned Stark") || (secondPlayer2 != "Arya Stark")) && ((circleX2 === 225) && (circleY2 === 830))) {
        setTimeout(() => {
            console.log("trap opt4")
           document.getElementById("trap1modal-wrap").style.display = "block"; 
            document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + secondPlayer2 + " you are not welcome here! The soliders chase you, and you move back 4 spaces!</p><button onclick='closeModal()'>I better run!</button>";
           
            circleX2 = circleX2 + 600;
            //trapo = [];
            draw();
        }, 100);
    }
}
 function trap2() {
     /* Player 1 trap 2
    ----------------------*/
     if (player1game.length > player2game.length && circleX1 === 525 && circleY1 === 680) {
         setTimeout(() => {
             document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
             alert("It's a trap! Move back three squares");
             circleX1 = circleX1 + 450;
             //trapo = [];
             draw();
         }, 100);
     } 
     /* Player 2 trap 2
    ----------------------*/
     else if (player1game.length === player2game.length && circleX2 === 525 && circleY2 === 680) {
         setTimeout(() => { document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
             alert("It's a trap! Move back three squares");
              circleX2 = circleX2 + 450;
             //trapo = [];
             draw();
         }, 100);
     }
 }

function closeModal() {
     document.getElementById("trap1modal-wrap").style.display = "none"; 
}

//modal6.style.display = "none";
