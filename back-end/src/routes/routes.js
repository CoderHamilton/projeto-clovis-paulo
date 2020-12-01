module.exports = app =>
  {
    const livros = require("../controller/livro.controller.js");

    var routes = require("express").Router();

    routes.post("/", livros.create);

    routes.get("/", livros.findAll);

    routes.get("/", livros.findOne);

    routes.put("/", livros.update);

    routes.delete("/", livros.delete);

    routes.delete("/", livros.deleteAll);

    app.use('/api/livros', routes);
    
  }