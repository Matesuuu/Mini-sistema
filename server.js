const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2023;

app.use(bodyParser.json());

const alumnosRutas = require("./rutas/alumnoRutas");
app.use("/", alumnosRutas);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
