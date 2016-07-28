/*
 * Basic example of a stream, uses 3 out of 4 stream types
 * Readable, Writable, and Transform
 * Not directly Duplex, although Transform is a duplex that modifies data
 */
var fs = require('fs');
var zlib = require('zlib');
//create stream for reading file
var inFile = fs.createReadStream(process.argv[2]);
//create stream for writing to a file
var outFile = fs.createWriteStream(process.argv[3]);
//read file
inFile.pipe(
    //output piped to gzip stream
    zlib.createGzip()
)
//pipe output into response
.pipe(outFile);
