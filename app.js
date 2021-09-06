const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({path: './.env'})

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());


//!pentru imagini
app.use(express.static('views'))


app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('MySql connected!')
    }
})

// define router
app.use('/', require('./routes/pages'));
app.use('/auth' , require('./routes/auth'));


app.listen(5001, () => {
    console.log('server started on port 5001!')
})