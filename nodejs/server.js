'use strict';

const express = require('express');
const path = require('path')

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

// many app.get() sblocks probobly can be fixed by using app.use but didn't worck for me

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js',(request, response) => {
    response.sendFile(__dirname + '/script.js');
});

app.get('/applicationdata/model.txt',(request, response) => {
    response.sendFile(__dirname + '/applicationdata/model.txt');
});

app.get('/styles/styles.css',(request, response) => {
    response.sendFile(__dirname + '/styles/styles.css');
});


app.listen(PORT, HOST);