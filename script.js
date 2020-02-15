// set the variables
var upperCharSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCharSet = [,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var charSymbols = ["!","@","#","$","%","^","&","*","(",")","+","=","?","<",">",",",".","/"];
var totalLength = 0;
console.log(upperCharSet, lowerCharSet, charNumbers, charSymbols, totalLength);

var password = "";

function pickRandom(arr) {
    Math.floor(Math.random() * arr.length);
}
function generate() {

    var hasUpperCase = confirm("includes upper case");
    var hasLowerCase = confirm("includes lower case");
    var hasNums = confirm("includes nums");
    var hasSyms = confirm("includes syms");
    var hasTotalLength = prompt("password to be 8 to 128 characters");

    if(hasTotalLength < 8 || hasTotalLength > 128) {
        alert("Hey, make sure you have the right length!");
    }

    
    // alert("includes upper case: " + hasUpperCase);
    // alert("includes lower case" + hasLowerCase);
    // alert("includes nums" + hasNums);
    // alert("includes syms" + hasSyms);

    var genPass = Math.floor(Math.random() * 10) + 1;

    
}
    generate();
    // var hereItIs = document.getElementById("demo");
    // hereItIs.innerHTML = passChar;