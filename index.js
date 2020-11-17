const express = require('express');

// App setup
const app = express();
const server = app.listen(8080, function(){
    console.log("listening to requests on port 8080")
})


// Static files
app.use(express.static('public'))