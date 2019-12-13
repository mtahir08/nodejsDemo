const express = require('express');
const bodyParser = require('body-parser');

require('./mongodb');
const authRouter = require('./routes/auth');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/auth', authRouter);


// Starting server
app.listen(port, () => {
    console.log('server is running!!');
});
//
