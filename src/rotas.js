const express = require("express");
const User = require("./model");

const router = express.Router();

router.get("/usuarios", async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).send(users);
  } catch (erro) {
    return res.status(400).send({ error: "Falha na busca" });
  }
});

router.post("/usuarios", async (req, res) => {
  const { nome, sobreNome, email } = req.body;

  try {
    const user = await User.create({ nome, sobreNome, email });

    return res.status(200).send(user);
  } catch (erro) {
    return res.status(400).send({ error: "Falha na criação" });
  }
});

module.exports = router;
