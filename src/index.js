const express = require("express");
const bodyParser = require("body-parser");
const rotas = require("./rotas");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);

app.use("/api", rotas);
