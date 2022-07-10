const db = require("../models");
const Location = db.locations;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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

  if (!req.body.userId) {
    res.status(400).send({
      message: "Atualize o aplicativo para nova versão",
    });
    return;
  }

  var base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/, "");

  const randomNumber = getRandomInt(10000, 99999);
  const filePath = `${process.env.PATH_IMAGE}/IMG-${randomNumber}.jpeg`;
  const urlImage = `${process.env.URL_IMAGE}IMG-${randomNumber}.jpeg`;

  require("fs").writeFile(filePath, base64Data, "base64", function (err) {
    console.log(err);
  });

  const location = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    url_image: urlImage,
    userId: req.body.userId,
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
        message: err.message || "Some error occurred while get all location.",
      });
    });
};

exports.getAllByIdUser = (req, res) => {
  Location.findAll({ where: { userId: req.params?.userId } })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while get all location.",
      });
    });
};
