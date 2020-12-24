const express = require('express');
const auth = require("./routes/auth");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send("a")
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/auth", auth);

app.listen(port, () => {
    console.log("server started")
});