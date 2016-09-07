/*
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space. 
*/
function LetterCapitalize(str) { 
    var words, capitalized;
  words = str.split(" "); //create an array of words
  capitalized = words.map(function(w){ // go through each word
      var letters;
      letters = w.split(""); //create array of letters for each word
      letters[0] = letters[0].toUpperCase(); //capitalize the first letter
      return letters.join("") //create the capitalized string
  })
  return capitalized.join(" "); //return string of capitalized words
}
// keep this function call here 
LetterCapitalize(readline());
