const db = require("../models");
const User = db.users;
const md5 = require("md5");

exports.signup = (req, res) => {
  if (!req.body.name || !req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const user = {
    name: req.body.name,
    username: req.body.username,
    password: md5(req.body.password),
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.signin = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  User.findOne({
    where: { username: req.body.username, password: md5(req.body.password) },
  })
    .then((data) => {
      if (data !== null) {
        res.status(200).send(data);
      } else {
        res.status(404).send({ message: "E-mail ou senha incorretos" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
