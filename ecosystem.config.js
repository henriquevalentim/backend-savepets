module.exports = {
  apps: [
    {
      name: "app",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
        PORT: 8080,
        HOST: "localhost",
        USER_DB: "root",
        PORT_DB: 25060,
        PASSWORD_DB: "123456",
      },
    },
  ],
};
