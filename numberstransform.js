var stream = require('stream');
/*
* Function to transform data
*/
function NumbersTransform(options) {
  //call stream.transform constructor
  stream.Transform.call(this, options);
}
//inherit from stream.transform
NumbersTransform.prototype = Object.create(stream.Transform.prototype);
NumbersTransform.prototype.constructor = NumbersTransform;
//Function called as data is being passed through to transform
NumbersTransform.prototype._transform = function(chunk, encoding, callback) {
  //if numbers are larger than 100
  if (chunk.readInt16BE() >= 100) {
    //pass number back to stream
    this.push(chunk);
  }
  callback();
}
module.exports = NumbersTransform;
