const database = require("../models");
const Livro = database.livros;
const OP = database.Sequelize.Op;

exports.create = (req, res) => 
  {
    if(!req.body.title)
      {
        res.status(400).send(
          {
            message: "O conteúdo não pode estar vazio!"
          });
          return;
      }

      const livro = 
        {
          titulo: req.body.titulo,
          autor: req.body.autor,
          ano: req.body.ano,
          preco: req.body.preco
        };
      
      Livro.create(livro)
        .then(data =>
          {
            res.send(data);
          })
        .catch(err => 
          {
            res.status(500).send(
              {
                message:
                  err.message || "Ocorreu algum erro ao inserir dados."
              });
          });
  };

exports.findAll = (req, res) => 
  {
    const title = req.query.title;
    var condition = title ? { title: { [OP.like]: `%${title}%` } } : null;

    Livro.findAll( { where: condition } )
      .then(data => 
        {
          res.send(data);
        })
      .catch(err => 
        {
          res.status(500).send(
            {
              message:
                err.message || "Ocorreu algum erro ao recuperar dados."
            });
        });
  };

exports.findOne = (req, res) => 
  {
    const id = req.params.id;

    Livro.findByPk(id)
      .then(data => 
        {
          res.send(data);
        })
      .catch(err => 
        {
          res.status(500).send(
            {
              message: "Erro ao recuperar os dados com id = " + id
            });
        });
  };

exports.update = (req, res) => 
  {
    const id = req.params.id;
    Livro.update(req.body, 
      {
        where: { id: id }
      })
      .then(num => 
        {
          if(num == 1)
            {
              res.send(
                {
                  message: "Os dados foram atualizado com sucesso."
                });
            }
            else
              {
                res.send(
                  {
                    message: "Não foi possivel atualizar o livro com id = ${id}."
                  });
              }
        })
        .catch(err => 
          {
            res.status(500).send(
              {
                message: "Erro ao atualizar o Livro com o id = " + id
              });
          });
  };

exports.delete = (req, res) => 
  {
    const id = req.params.id;
    
    Livro.destroy(
      {
        where: { id: id }
      })
      .then(num => 
        {
          if(num == 1)
          {
            res.send(
              {
                message: "Livro excluido com sucesso."
              });
          }
          else
          {
            res.send(
              {
                message: "Não foi possivel deletar o livro com id = ${id}."
              });
          }
        })
        .catch(err => 
          {
            res.status(500).send(
              {
                message: "Não possivel excluir o Livro com id = " + id
              });
          });
  };

exports.deleteAll = (req, res) => 
  {
    Livro.destroy(
      {
        where: {},
        truncate: false
      })
      .then(nums => 
        {
          res.send(
            {
              message: `${nums} Livros foram excluidos com sucesso.`
            });
        })
      .catch(err => 
        {
          res.status(500).send(
            {
              message:
                err.message || "Ocorreu algum erro ao excluir todos os livros."
            });
        });
  };