require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , ctrl = require('./controller')


const app = express(); 

app.use( bodyParser.json() );
app.use( cors() )

const { 
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env


app.get('/api/products', ctrl.read)
app.post('/api/tocart', ctrl.create)
app.get('/api/cart', ctrl.view)
app.put('/api/quant', ctrl.edit)
app.delete('/api/remove/:id', ctrl.delete)



massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database is connected");
    app.set("db", dbInstance);
  })
  .catch(err => {
    app.set("db", dbInstance);
    console.log(err);
});


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port:`, SERVER_PORT)
});