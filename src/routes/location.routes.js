module.exports = (app) => {
  const locations = require("../controllers/location.controller.js");

  var router = require("express").Router();

  router.post("/", locations.create);
  // router.post("/", locations.getAll);

  app.use("/api/locations", router);
};
