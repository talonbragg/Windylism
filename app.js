const express = require('express');

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/views" } );
});