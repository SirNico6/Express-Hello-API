const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        "title": "Hello wolrd",
        "from": "node"
    });
});

module.exports = router;