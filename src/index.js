const express = require("express");
const bodyParser = require("body-parser");
const User = require("./model");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server = app.listen(3000);

app.get("/usuarios", async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).send(users);
  } catch (erro) {
    return res.status(400).send({ error: "Falha na busca" });
  }
});

app.post("/usuarios", async (req, res) => {
  const { nome, email } = req.body;

  try {
    const user = await User.create({ nome, email });

    return res.status(200).send(user);
  } catch (erro) {
    return res.status(400).send({ error: "Falha na criação" });
  }
});
