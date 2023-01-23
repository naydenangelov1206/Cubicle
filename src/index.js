const express = require("express");

//? When a folder is required it automatically calls the index
const routes = require("./routes");
const config = require("./config/config");
const setupViewEngine = require("./config/viewEngine");

const app = express();
setupViewEngine(app);

//? It looks if they are any files in the public folder and reads them
app.use(express.static("./src/public"));
app.use(routes);

app.listen(config.PORT, () =>
  console.log(`Server is running on port ${config.PORT}...`)
);
