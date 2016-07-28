var Numbers = require('./numbers.js');
var NumbersCache = require('./numberscache.js');
var NumbersTransform = require('./numberstransform.js');
//create new instances
var numbers = new Numbers();
var numbersCache = new NumbersCache('rand');
var numbersTransform = new NumbersTransform();
//pipe data from numbers into cache
numbers.pipe(numbersTransform).pipe(numbersCache);
//add listener, fires on finish of piping data to cache
numbersCache.on('finish', function() {
  console.log('Cache store');
  //iterate through all elements
  for (var key in NumbersCache.store) {
    console.log(key, ':', NumbersCache.store[key]);
  }
});
