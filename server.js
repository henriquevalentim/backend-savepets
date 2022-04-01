const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

require("dotenv").config({ path: path.join(__dirname, ".env") });

app.use(cors(corsOptions));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

const db = require("./src/models");
db.sequelize.sync();

require("./src/routes/user.routes")(app);
require("./src/routes/location.routes")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
