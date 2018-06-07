const express = require('express');
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './views/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});