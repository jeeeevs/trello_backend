const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const listRouter = require('./routes/list');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/list', listRouter);


module.exports = app;
