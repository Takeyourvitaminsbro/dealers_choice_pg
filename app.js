const express = require('express');
const morgan = require('morgan');
const app = express();
const homePage = require('./views/homePage');
const characterDetails = require('./views/characterDetails');
const db = require('./db/index');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use("/characters", require("./routes/characters"));

app.get('/', (req, res, next) => {
    res.redirect('/homePage');
});

app.get("/homePage", async (req, res, next) => {
    try {
        const data = await db.query('SELECT * FROM mytable');
        res.send(homePage(data.rows));
    } catch (error) { next(error) };
});

app.get("/half-bloods", async (req, res, next) => {
    try {
        const characters = await db.query('SELECT * FROM mytable');
        const rows = characters.rows;
        
        const halfBloods = rows.filter(obj => obj.blood === 'Half-blood');
        
        res.send(`

        <h2>Half Bloods</h2>

            <ul>
                ${halfBloods.map(obj => 

                    `<li>${obj.name}</li>`

                ).join('')}
            </ul>
        
        <div>
            <button><a href ='/homePage'>Homepage</a></button>
        </div>
        `)
    } catch (error) { next(error) };    
});


// app.get("/characters/:id", async(req, res, next) => {
//     try{
//         const character = await db.query('SELECT * FROM mytable WHERE id=$1', [req.params.id]);
//         res.send(characterDetails(character.rows[0]));
//     } catch (error) { next(error) };
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
})