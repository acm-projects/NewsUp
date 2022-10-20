var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fetch = require('node-fetch');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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
const key = 'a118e3ac40d04681a89f1393af5729af';
const endpoint = 'https://sentimentapi.cognitiveservices.azure.com/';
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
'q=Dogs&' +
'sortBy=publishedAt&' +
'apiKey=c5e6012ef64749fe8ab917786db99c93';

axios.get(url).then(function(r1) { 

  let firstResult = r1.data.articles[0];

  axios.get(firstResult.url).then(function(r2) {

    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    let article = new Readability(dom.window.document).parse();

    //sentiment analysis on article title
    sentimentAnalysisWithOpinionMining(article.title, textAnalyticsClient);
  })
})



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



