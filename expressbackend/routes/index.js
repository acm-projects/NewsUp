var express = require('express');
var fetch = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var XMLHttpRequest = require('xhr2');
  var request = new XMLHttpRequest();
  request.open('GET', 'https://newsapi.org/v2/everything?q=Apple&from=2022-09-29&sortBy=popularity&apiKey=c5e6012ef64749fe8ab917786db99c93', true);

  var url = 'https://www.engadget.com/best-october-prime-day-2022-deals-110011552.html';

  async function getNews() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
        
  getNews()
});

module.exports = router;
