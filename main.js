var Alphabet = require('./alphabet');
var Cache = require('./cache');
//create new instance of alphabet and cache
var alpha = new Alphabet();
var cache = new Cache('alpha1');
//pipe data from alphabet stream into cache
alpha.pipe(cache);
// @deprecated
//once listener is attached to the readable stream output data
// alpha.on('data', function(chunk) {
//   //log the data to the console
//   console.log(chunk.toString());
// });
//add listener, fires on finish of piping data to cache
cache.on('finish', function() {
  console.log('Cache store:');
  //iterate through all the elements
  for (var key in Cache.store) {
        console.log(key, ':', Cache.store[key]);
    }
});
