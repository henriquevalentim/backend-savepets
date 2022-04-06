const db = require("../models");
const Location = db.locations;

exports.create = (req, res) => {
  if (
    !req.body.latitude ||
    !req.body.longitude ||
    !req.body.description ||
    !req.body.image
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const location = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    image: req.body.image,
  };

  Location.create(location)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location.",
      });
    });
};

exports.getAll = (req, res) => {
  Location.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location.",
      });
    });
};
