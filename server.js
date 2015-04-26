var express = require("express");
var sqlite3 = require("sqlite3").verbose();
var bodyParser = require("body-parser");

var db = new sqlite3.Database("./db/music.db");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json({extended: false}));

app.get("/songs", function(req, res) {
	res.render("index.html")
});

app.post("/songs", function(req, res) {
	res.render("index.html")
})

app.listen(3000)
console.log("You're listening on port 3000")