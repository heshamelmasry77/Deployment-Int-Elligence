const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const forms = require('./routes/api/forms')
const admins = require('./routes/api/admins')
const externalentities=require('./routes/api/externalentities')
const app = express()
const cors=require('cors')
// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose

    .connect('mongodb+srv://ScrumMaster:26312215@int-elligence-s1doh.mongodb.net/local_library?retryWrites=true')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
    { useNewUrlParser: true }

// Init middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
//app.use(express.multipart());

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`);
})

// Direct routes to appropriate files 
app.use('/routes/api/users', users)
app.use('/routes/api/forms',forms)
app.use('/routes/api/admins',admins)
app.use('/routes/api/externalentities',externalentities)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port =   process.env.PORT ||  5000  
app.listen(port, () => console.log(`Server up and running on port ${port}`))