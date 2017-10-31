const http = require('http');
http.createServer((request, response) => {
    /**
     * This will run when you hit localhost:1000/ in browser 
     * or any tool like POSTMAN
     */
    response.end("Hello World");
    /**
     * 1000 is port, you can set any available port
     */
}).listen(1000, () => {
    console.log("Server is running")
})

/**
 * In folder "helloWorld" 
 * You can run this file using following command
 * node server.js
 */