var morse = require('morse-node').create();
var plain_text = "";
if(process.argv.length > 2) {
    plain_text = process.argv[2];
} else {
  console.log("\nEnter string to be encoded.\n\nExample:\n\tnodejs morse.js \"hack the planet\"\n");
  return;
}

console.log("enter a message to be converted into morse: " + process.argv[2]);
var encodedmsg = morse.encode(process.argv[2]);
console.log(encodedmsg);
 
var decodedmsg = morse.decode(encodedmsg);
console.log(decodedmsg);
 
//console.log(morse.isValid(encodedmsg, "morse"));
