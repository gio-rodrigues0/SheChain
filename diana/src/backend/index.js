const Express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = Express();

app.use(bodyParser.json());

const db = new sqlite3.Database("mydatabase.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the mydatabase database.");
  });

app.post('/signup/create', (req, res) => {
    let params = [];
    params.push(request.body.empresa);
    params.push(request.body.area);
    params.push(request.body.descricao);

    let sqlite3 = 'INSERT INTO diana (empresa, area, descricao) VALUES (?, ?, ?)';

    db.run(sqlite3, params, function(err) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Adicionado com sucesso!")
        }
    });
});

const port = 5000

app.listen(port, () => {console.log(`http://localhost:${port}`)})

