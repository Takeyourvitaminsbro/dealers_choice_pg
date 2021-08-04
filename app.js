const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use("/posts", require("./routes/posts"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
})