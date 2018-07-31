// 1 - We'll use Http
const http = require('http');


function myFunction() {
    console.log('My Function Runs');
}

// 2 - We create server and Run myFunction
const server = http.createServer(myFunction).listen(8000);