module.exports = (app) => {
  const locations = require("../controllers/location.controller.js");

  var router = require("express").Router();

  router.post("/", locations.create);
  router.get("/", locations.getAll);
  router.get("/:userId", locations.getAllByIdUser);

  app.use("/api/locations", router);
};
