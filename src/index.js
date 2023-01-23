const express = require("express");

//? When a folder is required it automatically calls the index
const config = require("./config/config");
const setupViewEngine = require("./config/viewEngine");

const app = express();
setupViewEngine(app);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(config.PORT, () =>
  console.log(`Server is running on port ${config.PORT}...`)
);
