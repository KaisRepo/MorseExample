
if(process.argv.length > 2) {
    encodedmsg = process.argv[2];
} else {
  console.log("\nEnter string to be decoded.\n\nExample:\n\tnodejs dec_morse.js \".... .- -.-. -.- / - .... . / .--. .-.. .- -. . -\"\n");
  return;
}

var morse = require('morse-node').create();
if(morse.isValid(encodedmsg, "morse")) {
  
  console.log("decoding message: " + encodedmsg);
  var decodedmsg = morse.decode(encodedmsg);
  console.log(decodedmsg);
}else {
  console.log("This is not valid morse code: " + encodedmsg)
}
//console.log(morse.isValid(encodedmsg, "morse"));
