require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/file', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
require('./controllers/uploadController')(app);

app.listen(process.env.PORT || 3000);