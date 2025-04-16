var http = require('http')

http.createServer(function(req, res){
    res.end("Welcome to my website!")
}).listen(8080)

console.log("O servidor rodando!")