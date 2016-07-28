var stream = require('stream');
//function to create an in memory cache
function NumbersCache(key, options) {
  //call stream.writable constructor
  stream.Writable.call(this, options);
  this._key = key;
  this._value = null;
  //add listener, event fires when adding entry to numberscache.store
  this.on('finish', function() {
    //store data using key and value
    NumbersCache.store[this._key] = this._value;
  });
};
//empty store
NumbersCache.store = {};
//inherit from stream.writable
NumbersCache.prototype = Object.create(stream.Writable.prototype);
NumbersCache.prototype.constructor = NumbersCache;
//function called when data is supplied to the stream
NumbersCache.prototype._write = function(chunk, encoding, callback) {
  //if value is empty
  if(!this._value) {
    //get the data from chunk and store it in value
    this._value = chunk;
    //otherwise
  } else {
    //concat data to the end of value
    this._value = Buffer.concat([this._value, chunk]);
  }
  //log numbers as they come in
  console.log(chunk.readInt16BE());
  //if callback is empty then write was successful, otherwise error event is triggered
  callback();
}
module.exports = NumbersCache;
