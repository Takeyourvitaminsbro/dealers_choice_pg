const router = require('express').Router();
const client = require('../db');
const homePage = require('../views/homePage');

router.get("/", async (req, res, next) => {
    try {
        const data = await client.query('SELECT name FROM mytable');
        res.send(homePage(data.rows));
    } catch (error) { next(error) };
});




module.exports = router;