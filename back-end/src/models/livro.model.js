module.exports = (sequelize, Sequelize) =>
  {
    const Livro = sequelize.define("livro",
      {
        titulo:
          {
            type: Sequelize.STRING 
          },
        autor:
          {
            type: Sequelize.STRING   
          },
        ano:
          {
            type: Sequelize.STRING
          }

      });

      return Livro;
  };