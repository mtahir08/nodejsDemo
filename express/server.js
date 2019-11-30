// import modules
const Express = require("express");

// initialize express app
let app = Express();
const port = 3001
// Routing
app.get('/', (req, res) => {
    /**
     * req == request
     * res == response
     * */
    res.status(200).send("<h1> Hello Express</h1>");
})

// This route will run when user hit localhost:3001/users 
app.get('/users', (req, res) => {
    res.status(200).send("<h2> Getting all users</h2>");
})
/**
 *  Here :user_id is treat like a variable.
 *  It will run whenever on localhost:3001/user/(any valid value)
 *  e.g. localhost:3001/user/abc
 *       localhost:3001/user/123
 */
app.get('/user/:user_id', (req, res) => {
    console.log(req.query)
    console.log(req.params)
    console.log(req.path)
    /**
     * You can get this variable value using
     * req.params.user_id
     * Make sure variable/property name must be same as in 
     * route and in req.params
     */
    res.send(`<h1>${req.params.user_id}</h1>`)
})


// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
//


// REST-> Representational Sate Transfer