const express = require('express');
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(8080);