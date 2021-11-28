const winston = require('winston');
const express = require('express');
const cors = require('cors');
const config = require('config');
const app = express();
app.use(cors({origin: "*"}))


require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

app.get('/', (req, res) =>{
    res.send(`Connected to Card Database`);
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;