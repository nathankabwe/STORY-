const { json } = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://google.com"
    https.get(url, function(res) {
        console.log(res.statusCode);

        res.on("data", function(data) {
            const wheatherdata = JSON.parse(data)
            console.log(wheatherdata);
            console.log(data);
        })

    })
    res.send("server is up running")

})

app.listen(3000, function() {
    console.log("server is running on port 3000");
})