const Express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')

const port = 3001;
const app = Express();
const upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json());
app.use(Express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.post('/file', upload.single('profile'), (req, res) => {
    console.log("req.file", req.file);
    res.send({ status: true })
})

app.listen(port, () => {
    console.log("server is running!!")
})
