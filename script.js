// set the variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var syms = "!@#$%^&*()+=?<>";

var password="";

var upperCase = confirm("includes upper case");
var lowerCase = confirm("includes lower case");
var nums = confirm("includes nums");
var syms = confirm("includes syms");
var totalLength = promt("how long for");

for(var i = 0; i < totalLength; i++) {
    if(upperCase) {
        var rand = getRandomChar(upperCase)
        password += rand;
    }

    if(lowerCase) {
        var rand = getRandomChar(lowerCase)
        password += rand;
    }

    if(nums) {
        var rand = getRandomChar(nums)
        password += rand;
    }

    if(syms) {
        var rand = getRandomChar(syms)
        password += rand;
    }
}