const handlebars = require("express-handlebars");

function setupViewEngine(app) {
  //? layoutDir can change and also the defaultLayout and partials also can change
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
    })
  );
  app.set("view engine", "hbs");
  app.set("views", "./src/views");
}

module.exports = setupViewEngine;
