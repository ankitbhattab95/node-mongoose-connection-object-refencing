const express = require('express');
const bodyParser = require('body-parser');
const http = require('http')
const app = express();
const config = require("config");
const mongoose = require('mongoose');
let connectionString = (config.get('username') && config.get('password')) ?
    `mongodb://${config.get('username')}:${config.get('password')}@${config.get('host')}/${config.get('database')}`
    :
    `mongodb://${config.get('host')}/${config.get('database')}`
console.log('connectionString =', connectionString)

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log('error connecting to db:', err)
    else console.log('connected to db')
})
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});
app.config = config;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/routes')(app);
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 60034;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
    console.log('Environment ' + process.env.NODE_ENV)
    console.log('Server started at port ' + port)
});
global.app = app;
module.exports = app;