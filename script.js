var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var circleX = 1125;
var circleY = 725;

draw();

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    ctx.arc(circleX, circleY, 40, 0, 2 * Math.PI);
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

        if ((circleX === 825) && (circleY === 725) && (trapo.length === dicolini) && (trapo.length === 2||1)) {
        nyFunction();
        console.log("trapo.length: " + trapo.length);
        console.log("dicolini: " + dicolini);
        console.log("HURRA!" );
        
        var audio = document.getElementById("myAudioTrap");
        audio.play();
        trapo = [];
    } 
    /*if (diceNumber === 1 && circleX === 1125 - 150 && circleY === 725 && trapo.length === dicolini)  {
             trapo = [];
             }  */ 
     if ((circleX === 825 - 150) && (circleY === 725 - 150) && trapo.length === dicolini) {
         nyFunction2();
         console.log("trapo.length: " + trapo.length);
         console.log("dicolini: " + dicolini);
         console.log("HURRA!" );
        
         var audio = document.getElementById("myAudioTrap");
         audio.play();
         trapo = [];
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

var trapo = [];
console.log(trapo)
var diceNumber = "";

var x  = 1125 - 300;
var y = 725;

var ilini = "";
var dicolini = ""


function dice() {
    trapo = [];
    var dico = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";

    for (var i = 0; i < dico; i++) {
        ilini = i + 1;
        diceNumber = i + 1;
        
        
        dicolini = dico;
        //console.log("dico: " + dico)
        
        if ((circleX >= 76) && (dico + 1 !== diceNumber)) {
            setTimeout(() => {
                clickolini();
                //trapo[i] = trapo;
                //trapo.push();
        console.log("Trapo.length: " + trapo.length)
                console.log("Trapo: " + trapo)
                console.log("dicolini: " + dicolini)
            }, i * 500)
            
        } else if (circleX === 75 && dico + 1 !== diceNumber) {
            setTimeout(() => {
                clickolini();
                
            }, i * 500)
        }    
        function clickolini() {
            if (circleX >= 76) {
                trapo.push(i);
                circleX = circleX - 150;
                draw();
                // console.log("ilini: " + ilini);
                //    console.log("dicolini: " + dicolini);
                //  console.log("trapo: " + trapo);
                var audio = document.getElementById("myAudio");
                audio.play();        
            }
               else if (circleX === 75) {
                   trapo.push(i);
                circleY = circleY - 150;
                circleX = 1125;
                draw();
                var audio = document.getElementById("myAudio");
                audio.play()
                console.log("KlikkY!");
            }
        }
    }
}
     function nyFunction() {
            console.log("jaha: " + trapo.length);
            console.log("jaha2: " + diceNumber);
            console.log("NYFUNCTION!")
            setTimeout(() => {
                document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
                alert("It's a trap! Move back one square");
                circleX = circleX + 150;
                trapo = [];
                draw();
            }, 100);
        }
 function nyFunction2() {
            console.log("jaha: " + trapo.length);
            console.log("jaha2: " + diceNumber);
            console.log("NYFUNCTION!")
            setTimeout(() => {
                document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
                alert("It's a trap! Move back three squares");
                circleX = circleX + 450;
                trapo = [];
                draw();
            }, 100);
        }
 