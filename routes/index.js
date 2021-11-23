const express = require('express')
const db = require('../db')
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let results = await  db.all();
    res.json(results);
  }catch (e){
    console.log(e);
    res.sendStatus(500)
  }
})

router.get('/hw2', async (req, res, next) => {
  const std_id = req.query.std_id
  if(std_id){
    res.download(`./files/hw2/${std_id}.pdf`, err => {
      if(err){
        res.sendStatus(500)
      }
    })
  }else{
    res.sendStatus(500)
  }

})

module.exports = router;