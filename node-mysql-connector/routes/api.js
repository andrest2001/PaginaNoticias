const express = require('express');
const axios = require('axios')
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res, ) => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/random?apikey=pBg2suDqN394DyRM8jojqN7C1eAk2kTC")
    console.log(response.data)
    res.render('api', { 
        api: response.data.data.images.downsized_medium.url
    });
});

module.exports = router;