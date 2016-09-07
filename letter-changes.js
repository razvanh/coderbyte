/*
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/

function LetterChanges(str) { 

  var modified, array;
  var alphabet = "abcdefghijklmnopqrstuvxyz";
  var vowels = ["a", "e", "i" , "o" , "u"];
  modified = str.split("");
  modified = modified.map(function(letter) {
     if (letter.match(/[a-z]/i)){
         if (letter === "z") return A;
         else if (letter === "d") return "E";
         else if (letter === "h") return "I";
         else if (letter === "n") return "O";
         else if (letter === "t") return "U";
         else return String.fromCharCode(letter.charCodeAt(0) + 1);
     }
     else return letter;
  });
  return modified.join(""); 
         
}
   
// keep this function call here 
LetterChanges(readline());                            















                            
                            
                            
  