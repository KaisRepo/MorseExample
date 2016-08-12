var morse = require('morse-node').create();
 
var encodedmsg = morse.encode('SOS, Kai was here');
console.log(encodedmsg);
 
var decodedmsg = morse.decode(encodedmsg);
console.log(decodedmsg);
 
//console.log(morse.isValid(encodedmsg, "morse"));
