const http = require('http');
const server = http.createServer(function(request, response) {
  /**
   * This will run when you hit localhost:3000/ in browser
   * or any tool like POSTMAN
   */
  response.end('Hello World');
});
/**
 * 3000 is port, you can set any available port
 */
server.listen(3000, function() {
  console.log('Server is running');
});

/**
 * In folder "helloWorld"
 * You can run this file using following command
 * node server.js or npm start
 */
