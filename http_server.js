// 1 - We'll use Http
const http = require('http');

// 3 - That function will work when server start
function myFunction() {
    console.log('My Function Runs');
}

// 2 - We create server and Run myFunction
const server = http.createServer(myFunction).listen(8000);