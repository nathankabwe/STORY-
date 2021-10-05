const express = require("express");

const app = express();

app.get("/contact", function(req, res) {
    res.send("Contact me at: nathanbanza");
});


app.listen(5500, function() {
    console.log("log port on 3000");
});