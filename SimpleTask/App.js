const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./Routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
MONGODB_STRING = "mongodb+srv://AdnanKhattak:mypassword1234@cluster0.yzeosw8.mongodb.net/?retryWrites=true&w=majority"
SECRET_KEY = "abcdefghijklmno"

mongoose.connect(MONGODB_STRING, {});

app.use('/simpletask', routes);

app.listen(PORT, () => {
  console.log(`Simple Task is running on port ${PORT}`);
});

