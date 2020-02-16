fetch("https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    images(json);
   
  })
    .catch(function(error) {
    console.log("Error");
})

function images(details) {
    let image1 = document.getElementById("image1");
    image1.innerHTML += "<img class='image' src='" + details.characters[123].characterImageFull + "'>" 
    let image2 = document.getElementById("image2");
    image2.innerHTML += "<img class='image' src='" + details.characters[133].characterImageFull + "'>" 
    let image3 = document.getElementById("image3");
    image3.innerHTML += "<img class='image' src='" + details.characters[59].characterImageFull + "'>" 
    let image4 = document.getElementById("image4");
    image4.innerHTML += "<img class='image' src='" + details.characters[349].characterImageFull + "'>" 
    console.log(details.characters[123].characterImageFull)
    let image5 = document.getElementById("image5");
    image5.innerHTML += "<img class='image' src='" + details.characters[15].characterImageFull + "'>" 
    console.log(details.characters[123].characterImageFull)
    let image6 = document.getElementById("image6");
    image6.innerHTML += "<img class='image' src='" + details.characters[257].characterImageFull + "'>" 
    let image7 = document.getElementById("image7");
    image7.innerHTML += "<img class='image' src='" + details.characters[287].characterImageFull + "'>" 
    let image8 = document.getElementById("image8");
    image8.innerHTML += "<img class='image' src='" + details.characters[345].characterImageFull + "'>" 
    let image9 = document.getElementById("image9");
    image9.innerHTML += "<img class='image' src='" + details.characters[113].characterImageFull + "'>" 
    let image10 = document.getElementById("image10");
    image10.innerHTML += "<img class='image' src='" + details.characters[38].characterImageFull + "'>" 
}


const baseUrl = "https://anapioficeandfire.com/api/characters/";
let id = [583,1346,339,1052,148,823,901,2024,529,238]


var characterUrl1 = `${baseUrl}${id[0]}`;
var characterUrl2 = `${baseUrl}${id[1]}`;
var characterUrl3 = `${baseUrl}${id[2]}`;
var characterUrl4 = `${baseUrl}${id[3]}`;
var characterUrl5 = `${baseUrl}${id[4]}`;
var characterUrl6 = `${baseUrl}${id[5]}`;
var characterUrl7 = `${baseUrl}${id[6]}`;
var characterUrl8 = `${baseUrl}${id[7]}`;
var characterUrl9 = `${baseUrl}${id[8]}`;
var characterUrl10 = `${baseUrl}${id[9]}`;   

/*
Character page
*/

fetch(characterUrl1)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar1(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl2)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar2(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl3)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar3(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl4)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar4(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl5)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar5(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl6)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar6(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl7)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar7(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl8)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar8(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl9)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar9(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl10)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar10(json);
  })
    .catch(function(error) {
    console.log("Error");
})

function createChar1(details) {    
    let char1 = document.getElementById("char1");
    let titles1 = document.getElementById("titles1");
    let aliases1 = document.getElementById("aliases1");
    char1.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }   
 }
function createChar2(details) {
    let char2 = document.getElementById("char2");
    let titles1 = document.getElementById("titles2");
    let aliases1 = document.getElementById("aliases2");
    char2.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }   
}
function createChar3(details) {
    let char3 = document.getElementById("char3");
    let titles1 = document.getElementById("titles3");
    let aliases1 = document.getElementById("aliases3");
    char3.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }   
}
function createChar4(details) {
    let char4 = document.getElementById("char4");
    let titles1 = document.getElementById("titles4");
    let aliases1 = document.getElementById("aliases4");
    char4.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    } 
}
function createChar5(details) {
     let char5 = document.getElementById("char5");
    let titles1 = document.getElementById("titles5");
    let aliases1 = document.getElementById("aliases5");
    char5.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }
}
function createChar6(details) {
     let char6 = document.getElementById("char6");
    let titles1 = document.getElementById("titles6");
    let aliases1 = document.getElementById("aliases6");
    char6.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }
}
function createChar7(details) {
  let char7 = document.getElementById("char7");
    let titles1 = document.getElementById("titles7");
    let aliases1 = document.getElementById("aliases7");
    char7.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }
}
function createChar8(details) {
   let char8 = document.getElementById("char8");
    let titles1 = document.getElementById("titles8");
    let aliases1 = document.getElementById("aliases8");
    char8.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }
}
function createChar9(details) {
    let char9 = document.getElementById("char9");
    let titles1 = document.getElementById("titles9");
    let aliases1 = document.getElementById("aliases9");
    char9.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }
}
function createChar10(details) {
     let char20 = document.getElementById("char20");
    let titles1 = document.getElementById("titles10");
    let aliases1 = document.getElementById("aliases10");
    char10.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
    }
}

document.getElementById("charOption1").addEventListener("click", option1);
/*document.getElementById("charOption2").addEventListener("click", option2);
document.getElementById("charOption3").addEventListener("click", option3);
document.getElementById("charOption4").addEventListener("click", option4);
document.getElementById("charOption5").addEventListener("click", option5);
document.getElementById("charOption6").addEventListener("click", option6);
document.getElementById("charOption7").addEventListener("click", option7);
document.getElementById("charOption8").addEventListener("click", option8);
document.getElementById("charOption9").addEventListener("click", option9);
document.getElementById("charOption10").addEventListener("click", option10);*/



document.getElementById("john").addEventListener("click", john);
document.getElementById("ned").addEventListener("click", ned);
document.getElementById("danny").addEventListener("click", danny);
var pushi = 1;
var characters = [];

var player1 = [];
var player2 = [];
var playercount = [];
console.log("Player 1: " + player1)

var jon = document.getElementById("john"); 
var ned = document.getElementById("ned");
var danny = document.getElementById("danny"); 

function option1() {
    if (player1.length === 0 && player2.length === 0) {
    document.getElementById("player1").innerHTML = "<div id='card1'><p>Player 1 has chosen John Snow</p><p>Do you want to play as John Snow?</p><button onclick='option1Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    //charOption1.classList.add("chosen"); 
    } else if (player1.length === 1 && player2.length === 0) {
        document.getElementById("player2").innerHTML = "<div id='card1'><p>Player 2 has chosen John Snow</p><p>Do you want to play as John Snow?</p><button onclick='option1Yes()'>Yes!</button><button onclick='option1no()'>No...</button></div>";
    }
}

function option1Yes() {
    
    if (player1.length === 0 && player2.length === 0) {
        player1.push("John Snow")
        console.log("player1: " + player1[0])
        document.getElementById("charOption1").remove();
        document.getElementById("player1").innerHTML = "Player 1 has chosen " + player1[0] + "!"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        player2.push("John Snow");
        document.getElementById("charOption1").remove();
        document.getElementById("player2").innerHTML = "Player 2 has chosen" + player2[0] + "!"
        document.getElementById("whichPlayer").innerHTML = ""
        play();
    }
}

function option1No() {
    console.log("no");
    document.getElementById("player1").innerHTML = "";
}

/*
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