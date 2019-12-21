const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

require('./mongodb');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, }));
app.use('/images', express.static('uploads'));
app.use('/auth', authRouter);
app.use('/api', apiRouter);


// Starting server
app.listen(port, () => {
    console.log('server is running!!');
});
//
