const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var https_server = http.createServer(server_config, app).listen(2600, function(err){
    console.log("Node.js Express HTTPS Server Listening on Port 2600");
});
