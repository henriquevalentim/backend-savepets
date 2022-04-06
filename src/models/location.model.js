module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    latitude: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(50000),
      allowNull: false,
    },
  });

  return Location;
};
