// set the variables
function generator() {

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var nums = "0123456789";
    var syms = "!@#$%^&*()+=?<>,./";
    var totalLength = 0;
    
    var password = "";

    var rand = "random generated password";

    var hasUpperCase = confirm("includes upper case");
    var hasLowerCase = confirm("includes lower case");
    var hasNums = confirm("includes nums");
    var hasSyms = confirm("includes syms");
    var hasTotalLength = prompt("password to be 8 to 128 characters");

    alert("includes upper case: " + hasUpperCase);
    alert("includes lower case" + hasLowerCase);
    alert("includes nums" + hasNums);
    alert("includes syms" + hasSyms);

    var genPass = Math.floor(Math.random() * 10) + 1;

    for (var i = 0; i < totalLength; i++) {
        if (upperCase) {
            var rand = getRandomChar(upperCase)
            password += rand;
        }

        if (lowerCase) {
            var rand = getRandomChar(lowerCase)
            password += rand;
        }

        if (nums) {
            var rand = getRandomChar(nums)
            password += rand;
        }

        if (syms) {
            var rand = getRandomChar(syms)
            password += rand;
        }

    }
}
generator()
