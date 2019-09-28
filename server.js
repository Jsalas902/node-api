const express  = require('express');
const mongoose = require('mongoose');


// Iniciando App
const app = express();

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Primera route
app.get('/', (req, res) => {
    res.send('Hola Jainner como estas');
});

app.listen(3001);