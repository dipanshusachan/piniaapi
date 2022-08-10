const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/dbconfig.js');

const port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send("Hello");
});

//import employeeroutes
const EmpRoutes = require('./src/routes/emproutes');

//create emp. routes
app.use('/api/employee',EmpRoutes);

app.listen(port,() => {
    console.log(`Express running Port is ${port}`);
});
