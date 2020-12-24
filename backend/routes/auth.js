const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res) => {
   res.send("hee")
});

router.get("/token", (req, res) => {
    res.json(req.body)
});

router.post("/token", (req, res) => {
    res.json(req.body)
});

router.post("/", async (req, res) => {
    console.log(req.body)
    await axios.post("http://coub.com/oauth/token", {}, {
        params: {
            grant_type: "authorization_code",
            client_id: req.body.clientId,
            client_secret: req.body.secretId,
            redirect_uri: req.body.redirectToken,
            code: req.body.code
        }
    })
        .then((r) => {
            res.json(r)
        })
        .catch((err) => {
            res.status(401).json({error: err})
        });
    res.json(req.body)
});

module.exports = router;
