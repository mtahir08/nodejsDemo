const Express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')

const port = 3001;
const app = Express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})
const upload = multer({ storage })


app.use(bodyParser.json());
app.use(Express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.post('/file', upload.single('profile'), (req, res) => {
    res.send({ status: true })
})

app.listen(port, () => {
    console.log("server is running!!")
})
