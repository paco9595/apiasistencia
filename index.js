
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const db = require("./mysql");

app.use(cors());
app.use(express.json());

app.post('/asistencia', (req,res)=>{
    const {nombre, asistencia, adultos, ninos} = req.body;
    console.log(JSON.stringify(req.body))
    db.query(
        `INSERT INTO asistencia(nombre, adultos, ninos, asistencia) VALUES('${nombre}', '${adultos}','${ninos}', '${asistencia}')`,
        (err, results) => {
            if (err) return res.status(500).send({ err });
            return res.status(200).send({ results });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;