const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

require('./mongodb');
const authRouter = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', authRouter);


// Starting server
app.listen(port, () => {
    console.log('server is running!!');
});
//
