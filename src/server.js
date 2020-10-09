const express = require('express');
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require('morgan');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, '..', 'src', 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan('dev')); // Logging requests
app.use(express.urlencoded({ extended: false })); // Convert each received resource to json

//Global variables

//Routes
app.use(require("./routes/users/users.routes"));

// Static Files
app.use(express.static(path.join(__dirname, 'public'))); // Any browser will access easily to them

module.exports = app;
