const express = require('express');

const router =  express.Router();

router.get('/', (req, res) =>
  {
    return res.send("Seja Bem Vindo!") 
  }

)

module.exports = router;