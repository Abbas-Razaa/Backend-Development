const fs = require('fs');
const http = require('http')

// writeFile
fs.writeFile('file.txt', 'Hello, How are you!', function(err){
    if(err) console.error(err);
    else console.log('done')
})

// appendFile
fs.appendFile('file.txt', 'Are you Fine or Not?', function(err){
    if(err) console.error(err);
    else console.log('done')
})

// rename
fs.rename('file.txt', 'Hello.txt', function(err){
    if(err) console.error(err);
    else console.log('done')
})

// copyFile
fs.copyFile('Hello.txt', './copy/copy.txt', function(err){
    if(err) console.error(err.message); // .message will print the actual error message
    else console.log('done')
})

// Note: directory should be empty
fs.rmdir('./copy', function(err){
    if(err) console.error(err);
    else console.log('removed')
})

// directory with files can be deleted through this method
fs.rm('./copy', {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log('removed')
})

// reading data from file
fs.readFile('./copy/copy.txt', 'utf8' ,(err,data)=>{
    if(err) throw err;
    console.log(data);
})

// http
const server = http.createServer(function(req,res){
    res.end('heloo world');
})

server.listen(3000);