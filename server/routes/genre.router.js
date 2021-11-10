const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/:id', (req,res) => {

  // req.params.id /:id /5
  // req.query.q /q=x /Batman

  const queryText = `
  select genres.id, genres.name from genres
  join movies_genres on genres.id = movies_genres.genre_id
  where movies_genres.movie_id = $1;
  `
  console.log('genre route GET', req.params.id);
  

  pool.query(queryText, [req.params.id]).then(
    result => {
      res.send(result.rows);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);       
    })
})

module.exports = router;