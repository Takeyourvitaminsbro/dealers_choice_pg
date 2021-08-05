const router = require('express').Router();
const db = require('../db/index');
const characterDetails = require('../views/characterDetails');


router.get("/:id", async(req, res, next) => {
    try{
        const character = await db.query('SELECT * FROM mytable WHERE id=$1', [req.params.id]);
        res.send(characterDetails(character.rows[0]));
    } catch (error) { next(error) };
});


module.exports = router;