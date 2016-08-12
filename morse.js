var morse = require('morse-node').create();

console.log("enter a message to be converted into morse: " + process.argv[2]);
var encodedmsg = morse.encode(process.argv[2]);
console.log(encodedmsg);
 
var decodedmsg = morse.decode(encodedmsg);
console.log(decodedmsg);
 
//console.log(morse.isValid(encodedmsg, "morse"));
