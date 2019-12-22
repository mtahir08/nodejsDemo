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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/images', express.static('uploads'));
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('*', (req, res) => { res.send("Not Found!") });


// Starting server
app.listen(port, () => {
    console.log('server is running!!');
});
//
