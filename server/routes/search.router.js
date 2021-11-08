const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/:t', (req,res) => {
    const searchTerms  = req.params.t;
    console.log('/search GET', searchTerms);

    axios.get(`http://www.omdbapi.com/?t=${searchTerms}&apikey=${process.env.OMDb_API_KEY}`
    )
    .then ((response) => {
        console.log('response object is', response );
        res.send(response.data);
    })
    .catch((error) => {
        console.log('ERROR WITH OMDB API GET', error); 
    });
})

module.exports = router;