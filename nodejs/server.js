'use strict';

const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static(__dirname + '/express'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/express/index.html');
});

app.listen(PORT, HOST);