'use strict';

const express = require('express');
const path = require('path')

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js',(request, response) => {
    response.sendFile(__dirname + '/script.js');
});

app.get('/applicationdata/model.txt',(request, response) => {
    response.sendFile(__dirname + '/applicationdata/model.txt');
});


app.listen(PORT, HOST);