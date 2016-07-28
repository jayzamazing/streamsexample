var stream = require('stream');
/*
* Function to create and output random numbers
*/
function Numbers(options) {
  //call stream.readable constructor
  stream.Readable.call(this, options);
  this._start = 0;
  this._end = 50;
  this._curr = this._start;
};
//inherit from stream.readable
Numbers.prototype = Object.create(stream.Readable.prototype);
Numbers.prototype.contructor = Numbers;
//Function called whenever data is required from readable
Numbers.prototype._read = function() {
  //get a random number between 1 and 1000
  var randomNumber = Math.floor(Math.abs(Math.random() * (1 - 1000) + 1));
  //create a buffer object to store the number for specific size
  var buf = Buffer.alloc(2);
  //write number to buffer
  buf.writeInt16BE(randomNumber);
  //push the number to the buffer
  this.push(buf);
  //increment the current count
  this._curr++;
  //if this is the end of the data
  if(this._curr === this._end) {
    //push null, tells buffer that data has ended
    this.push(null);
  }
}
module.exports = Numbers;
