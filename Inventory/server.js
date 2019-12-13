const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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
