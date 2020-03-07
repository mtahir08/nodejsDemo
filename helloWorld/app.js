const http = require('http');
const port = 3000;
http.createServer(requestHandler)
    .listen(port, () => {
        console.log('server started on port ' + port);
    });

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
  if (req.url === '/') {
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about') {
    res.end('Welcome to the about page!');
  } else {
    res.end('Error! File not found.');
  }
}
