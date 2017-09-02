var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */

router.post('/',(req,res,next)=>{
    var { username } = req.query
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${username}?api_key=RGAPI-2f9a9362-9640-4e65-a575-ad62df19abe9`)
    .then((name)=> {
        res.send(name.data)
    })
})

// router.get('/', function(req, res, next) {
//   axios.get('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/localhost3000?api_key=RGAPI-50633443-46a4-4f96-8156-ad91df56a9b3')
//   .then((name)=> {
//       console.log(name.data)
//   })
// });

module.exports = router;
