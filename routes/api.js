var express = require('express');
var router = express.Router();
var request = require('request');
var axios = require('axios')
/* GET home page. */
/*
request('https://ddragon.leagueoflegends.com/api/versions.json',(err,response,versions) => {
        var currentVersion = versions[0]
    })
*/
router.post('/',(req,res,next)=>{
    var { username } = req.query
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${username}?api_key=RGAPI-313506a6-457b-4e28-bce9-3ab232d1370f`)
        .then((name) => {
            console.log(name.data)
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
