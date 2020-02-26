var winner = sessionStorage.getItem("winner");
var winnerImage = sessionStorage.getItem("chosenImages");

document.getElementById("winner").innerHTML = "<p class='winner'>" + winner +"</p>