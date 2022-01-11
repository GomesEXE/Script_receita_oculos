const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Receita = require("./database/Receita");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((err) => {
        console.log(err);
    })


app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
    res.render("index")
});

app.post("/salvarReceita", (req, res) => {
    Receita.create({
        Paciente: req.body.paciente,

        OdEsfericoLonge : req.body.odEsfericoLonge,
        OeEsfericoLonge : req.body.oeEsfericoLonge,
        OdCilindricoLonge : req.body.odCilindricoLonge,
        OeCilindricoLonge : req.body.oeCilindricoLonge,
        OdEixoLonge : req.body.odEixoLonge,
        OeEixoLonge : req.body.oeEixoLonge,

        OdEsfericoPerto : req.body.odEsfericoPerto,
        OeEsfericoPerto : req.body.oeEsfericoPerto,
        OdCilindricoPerto : req.body.odCilindricoPerto,
        OeCilindricoPerto : req.body.oeCilindricoPerto,
        OdEixoPerto : req.body.odEixoPerto,
        OeEixoPerto : req.body.oeEixoPerto,

        Observacoes : req.body.observacoes
    }).then(() => {
        res.send("Receita salva com sucesso");
    })
})

app.listen(8080, () => { console.log("App rodando!"); })