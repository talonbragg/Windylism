const express = require('express');
const path = require('path');

var app = express();

app.get('/', function(req, res) {
    res.sendFile('views/index.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});