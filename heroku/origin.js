// import modules
const Express = require("express");
const logger = require('morgan');
// initialize express app
let app = Express();


// Middleware
app.use((req, res, next) => {
    console.log("method " + req.method + " to " + req.url);
    next();
})
app.use(logger('dev'));
// Allow origins
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});


// Routing
app.get('/', (req, res) => {
    /**
     * req == request
     * res == response
     * */
    res.status(200).send("<h1> Hello Express</h1>");
})

// Starting server
app.listen(process.env.PORT || 3001, () => {
    console.log("server is running!!")
});
// 