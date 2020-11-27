module.exports =
  {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "12101988",
    DB: "db-livro",
    dialect: "mysql",
    pool: 
      {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      } 
  };