const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require('./routes/routes');

const app = express();

var corsOptions = 
  {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const DB = require('./models')
DB.sequelize.sync();

app.use(routes);

require("./routes/routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => 
  {
    console.log("O servidor esta logado na porta ${PORT}.");
  });