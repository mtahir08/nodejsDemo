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
}).listen(1000, requestHandler)

/**
 * 
 * @param {*} req 
 * @param {*} res
 * 
 * You could imagine building your entire site in this one request handler function.
 * For very small sites, this might be easy, but you could imagine this function getting
 * huge and unwieldy pretty quickly. You might want a framework to help you cleanup this 
 * HTTP server…things could get messy! 
 */
function requestHandler(req, res) {
    if (req.url === "/") {
        res.end("Welcome to the homepage!");
    } else if (req.url === "/about") {
        res.end("Welcome to the about page!");
    } else {
        res.end("Error! File not found.");
    }
}