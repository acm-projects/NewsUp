var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fetch = require('node-fetch');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb+srv://Global_NewsUpACM:no5N7YorirOnZWE5@cluster0.fvbqxpw.mongodb.net"

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// sentiment analysis

"use strict";

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const key = 'cfad6cba042e40bfb4c482d37a203535';
const endpoint = 'https://sentimentanalysisapi.cognitiveservices.azure.com/';
// Authenitcation info
const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));

// Example input
async function sentimentAnalysisWithOpinionMining(articleText, client){

  const sentimentInput = [
    {
      text: articleText,
      id: "0",
      language: "en"
    }
  ];
  const results = await client.analyzeSentiment(sentimentInput, { includeOpinionMining: true });

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    console.log(`- Document ${result.id}`);
    if (!result.error) {
      console.log(`\tDocument text: ${sentimentInput[i].text}`);
      console.log(`\tOverall Sentiment: ${result.sentiment}`);
      console.log("\tSentiment confidence scores:", result.confidenceScores);
      console.log("\tSentences");
      for (const { sentiment, confidenceScores, opinions } of result.sentences) {
        console.log(`\t- Sentence sentiment: ${sentiment}`);
        console.log("\t  Confidence scores:", confidenceScores);
        console.log("\t  Mined opinions");
        for (const { target, assessments } of opinions) {
          console.log(`\t\t- Target text: ${target.text}`);
          console.log(`\t\t  Target sentiment: ${target.sentiment}`);
          console.log("\t\t  Target confidence scores:", target.confidenceScores);
          console.log("\t\t  Target assessments");
          for (const { text, sentiment } of assessments) {
            console.log(`\t\t\t- Text: ${text}`);
            console.log(`\t\t\t  Sentiment: ${sentiment}`);
          }
        }
      }
    } else {
      console.error(`\tError: ${result.error}`);
    }
  }
}



//newsapi

const axios = require('axios');

const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

let url = 'https://newsapi.org/v2/everything?' +
'q=BasketBall, Football, Soccer, Swimming, Baseball, Tennis, VolleyBall&' +
'sortBy=publishedAt&' +
'apiKey=c5e6012ef64749fe8ab917786db99c93';

let article;
let articleList;

try {

axios.get(url).then(function(r1) { 

  articleList = r1.data.articles;

  var i;

  for(i = 0; i < articleList.length; i++){

    let currArticle = articleList[i];

    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Stories");
        var myobj = currArticle;

        dbo.collection("Sports").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    

    /* start of sentiment comment

    console.log(currArticle);

    axios.get(currArticle.url).then(function(r2) {

      let dom = new JSDOM(r2.data, {
        url: currArticle.url
      });

      article = new Readability(dom.window.document).parse();
  
      //sentiment analysis on article title
      try{
      //console.log(article);
      //sentimentAnalysisWithOpinionMining(article.textContent, textAnalyticsClient);
      }
      catch(error){
        if(error.response) {
          console.log(error.response);
        }
      }

    })

    end of sentiment comment */ 

  }

})
}
catch (error) {
  if(error.response) {
    console.log(error.response);
}
}





//get all news articles
/*

async function getNews() {
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-10-18&' +
          'sortBy=popularity&' +
          'apiKey=c5e6012ef64749fe8ab917786db99c93';

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getNews()

*/

