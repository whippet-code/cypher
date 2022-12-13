/*
** Hyperiondev Web Dev Capstone 2 Project - Text cypher function **
-------------------------------------------------------------------

Task to crete a function which takes an arg. string, employs a caesar 
cypher on the input (15 places further in alphabet). Then returns this
as a string.
*/

/* Pseudocode

Itterate String
Find if character is a->z OR A->Z (use chr.toUpperCase != chr.toLowerCase)
  - Find if chr is Uppercase (chr === chr.toUpper) -> if so set variable to true & turn char to lowercase/ else variable is false (switch used to rebuild string later)
  - pass chr to shift function.
  ******* Shift function does cypher of letter & returns a 1 letter string. ************
  with this output if switch variable == true -> char.toWpper (convert back to uppercase)
Out of initial if loop (a->z && A->Z)
build output string with each cyphered letter (cypher = cypher + char)

After full itteration - return cypher
*/

// The above was built first to ensure string handling worked char by char without actually cyphering the characters.
// Then I built out the shift function
  

function shift(chr){
  // **** Function takes in a lowercase letter(string) and returns a letter(string) 15 spaces after it in alphabet (loops after z back to a) ****

  // input letter shift function here - func could easily be editted to alter amount shifted (add extra arg.)
  // .charCodeAt() & String.fromCharCode() syntax referenced from mdn docs- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

  // convert chr to ascii value & shift (+15)
  chr = chr.charCodeAt(0) + 15;

  // if value higher than 122 (z) - subtract 26 (as 26 letter in alphabet, ie count goes 121, 122, 97, 98)
  if (chr > 122) {
    chr = chr - 26;
  }
  // convert ascii-value back to a-z
  chr = String.fromCharCode(chr)
  // return chr 
  return chr;
}

function cypher(str){
  // initial variables for case tracking and output string
  let upper = false;
  let cypher = '';

  for(let chr of str) {
    // is chr a letter?
    if(chr.toUpperCase() != chr.toLowerCase()) {
      // is chr uppercase?
      if(chr.toUpperCase() === chr) {
        upper = true;
        chr = chr.toLowerCase();
      }
      else {
        upper = false;
      }
      // Pass to shift function
      chr = shift(chr);
      // If chr was uppercae
      if(upper) {
        chr = chr.toUpperCase();
      }
    }
    // build output string
    cypher = cypher + chr;
  }
return cypher;
}

// test strings
let str = ["a! p?", "Estd alddpd esp epde!", "!'123lMnopQrsTuVwXYzAbcDefGhijk.456&*(0"];

// Run tests to console.
console.log(cypher(str[0]));
console.log(cypher(str[1]));  // "This passes the test!"
console.log(cypher(str[2]));  // alphabet a-z various case with extra symbols & numbers.