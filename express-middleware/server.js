// import modules
const Express = require("express");
// initialize express app
let app = Express();
const port = 3001

/** FORM Express site
 * http://expressjs.com/en/guide/using-middleware.html#middleware.application

 * =======================
 * =======================

 * Middleware functions are functions that have access to the request object (req), 
 * the response object (res), and the next middleware function in the application’s 
 * request-response cycle. The next middleware function is commonly denoted by a 
 * variable named next.
 *                              OR
 * middleware allows you to break request handler functions into smaller bits. 
 * These smaller functions tend to handle one thing at a time. 
 * 
 * 
 * Middleware functions can perform the following tasks:
 * 
 * Execute any code.
 * Make changes to the request and the response objects.
 * End the request-response cycle.
 * Call the next middleware function in the stack.
 * 
 * If the current middleware function does not end the request-response cycle, 
 * it must call next() to pass control to the next middleware function. Otherwise, 
 * the request will be left hanging.
 * 
 * 
 */

// Middleware
app.use((req, res, next) => {
    console.log("method " + req.method + " to " + req.url);
    next();
})


// Routing
app.get('/', (req, res) => {
    /**
     * req == request
     * res == response
     * */
    res.status(200).send("<h1> Hello Express</h1>");
})

// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
//