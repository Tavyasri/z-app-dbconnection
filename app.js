const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const host = 'localhost';
const port = '1617';
const serverDBURL = 'mongodb+srv://Tavyasri:tavyasri@cluster0.fqlpp.mongodb.net/Zomato?retryWrites=true&w=majority';

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use('/', router);

mongoose.connect(serverDBURL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(res => {
        app.listen(port, host, () => {
            console.log(`Server is Running at ${host}:${port}`)
        });
    })
    .catch(err => console.log(err));