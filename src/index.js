require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(3000);