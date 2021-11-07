const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/search', (req,res) => {
    const { searchTerms } = req.params;
    console.log('/search GET', searchTerms);

    axios.get(`http://http://www.omdbapi.com/?t=${searchTerms.title}&apikey=${process.env.OMDb_API_KEY}`
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