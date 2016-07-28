var stream = require('stream');
/*
* Function to output letters from A to Z.
*/
function Alphabet(options) {
  //call stream.readable constructor
  stream.Readable.call(this, options);
  this._start = 'a';
  this._end = 'z';
  this._curr = this._start.charCodeAt(0);
};
//inherit from stream.readable
Alphabet.prototype = Object.create(stream.Readable.prototype);
Alphabet.prototype.constructor = Alphabet;
//Function called whenever data is required from readable
Alphabet.prototype._read = function() {
  //get letter from current
  var letter = String.fromCharCode(this._curr);
  //create a buffer object to store the letter
  var buf = new Buffer(letter, 'utf8');
  //push the letter to the buffer
  this.push(buf);
  //increment the current letter
  this._curr++;
  //if this is the end of the data
  if(letter === this._end) {
    //push null, tells buffer that data has ended
    this.push(null);
  }
}
module.exports = Alphabet;
