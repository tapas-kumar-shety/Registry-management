require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');
const User  = require ('./server/models/user');
const connectDB = require('./server/config/db');
const bcrypt = require ('bcrypt')


const app = express();
const port = process.env.PORT || 5000;

// Connect to Database  
connectDB();

app.use(express.urlencoded({ extended: true }));  
app.use(session({secret: process.env.SECRET, resave: false, saveUninitialized: true}))

const requirelogin = require('./authMdlwr')

// Middleware to pass the logged-in user's name to every view
app.use((req, res, next) => {
    res.locals.userName = req.session.userName;
    next();
  });
  

app.use(express.json());
app.use(methodOverride('_method'));

// Static Files
app.use(express.static('public'));


// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/students', require('./server/routes/student'))
app.use('/', require('./server/routes/home'))
app.use('/user', require('./server/routes/user'))


// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404');
});




 app.get('/logout', (req, res) => {
    req.session.destroy();  
    res.redirect('/');  
});

//// LOGOUT POST
app.post('/logout', (req, res) => {
    req.session.destroy(); 
    res.redirect('/'); 
});



app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
});
