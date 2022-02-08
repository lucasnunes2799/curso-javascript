const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}`);
});

//body parser

app.use(bodyParser.urlencoded({ extended: false}));

//db Connection

db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err);
    });

//Routes


app.get('/',(req, res) => {
    res.send("Está funcionando teste");
});

// jobs routes

app.use('/jobs', require('./routes/jobs'));