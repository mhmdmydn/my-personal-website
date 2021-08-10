const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
const path = require("path");

const mainRouter = require('./routes/main');

var errorPg = path.join(__dirname, "./views/error/404.html");

//konfigurasi express layouting
app.set('view engine', 'ejs'); // gunakan ejs
app.use(expressLayouts);// gunakan express-ejs-layout
app.use(express.static('public'));// Built-in middleware
app.use(express.urlencoded({ extended: true }));


app.use('/', mainRouter);

app.use('/', (req, res) => {
    res.status(404).sendFile(errorPg);

});

app.listen(port, () => {
    console.log(`Server app running at http://localhost:${port}`);
});
