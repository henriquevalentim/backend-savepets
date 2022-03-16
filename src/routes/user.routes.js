module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/signup", users.signup); //inscrever-se

  router.post("/signin", users.signin); //entrar

  app.use("/api/users", router);
};
