<p align="center">
<img src="https://github.com/acm-projects/NewsUp/blob/main/GermanNewspaper.jpg" width="625"/>
</p>

# NewsUp
NewsUp is a website that compiles positive news stories by using sentiment analysis to provide users with the best stories of positive and wholesome events going on. Instead of hatred, NewsUp provides stories of love; instead of war, NewsUp gives users stories of peace; instead of monsters, NewsUp provides puppies. What more could you want?

## MVP
* Website UI to display news stories 
* Gather news stories from API, filter them using sentiment analysis, and display the positive ones on website
* All news stories on website provide working links to original story
* Implement algorithm that sorts news stories based on date
* Ability to refresh news websites with newly compiled positive news stories
* Notify user about a positive news story every day

## Stretch Goals
* Separate news stories by category 
  * Some category ideas for positive news include children, animals, donations, heroes, USA, and global
* Allow users to vote on new stories
* Sort news stories by user votes as well as by date
  * To learn a mathematical way to do this, see this [Medium post](https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9) on Reddit’s news sorting algorithm (only for the mathematically inclined)
* Gather positive quotes and display them on an automatically changing widget/component

## Timeline
* Everyone
  * Set meeting dates, decide front-end/back-end teams, Git tutorial, explain MVP, finalize tech stack (Week 1)
  * Set up IDE, download front-end and back-end tech stacks, watch tutorials (Week 2)
* Front-end:
  * Wireframe app and continue learning React.js (Week 2)
  * Implement wireframes using React.js (Weeks 3-5)
  * Integrate front-end with back-end, implement stretch goals as wanted (Weeks 6-8)
  * Prepare for presentation and polish design of front-end (Weeks 9-10)
* Back-end:
  * Set up MongoDB and connect it to app, learn Node.js and Express (Weeks 2-3)
  * Make basic infrastructure for back-end (Week 3)
  * Create methods using Express and MongoDB (Weeks 4-5)
    * GET, POST, PATCH, DELETE
    * Connect APIs to back-end, such as a sentiment analysis API and a news finder API
  * Integrate with front-end and implement stretch goals (Weeks 6-8)
  * Prepare for presentation and make finishing touches (Weeks 9-10)

## Tech Stack
* Frontend:
  * Figma/Adobe XD for wireframing
  * React.js
* Backend:
  * MongoDB 
  * Express
* Dependencies:
  * Git Bash
  * Node.js
  * VS Code
  * [Tensorflow.js](https://www.tensorflow.org/js) has built-in machine learning algorithms for sentiment analysis
    * A [tutorial](https://nifesimifrank.medium.com/how-to-train-and-deploy-a-sentiment-analysis-web-app-703c05b374fd) for how to use tensorflow.js for sentiment analysis on a web app
* APIs (potential):
  * [News API](https://newsapi.org/) to gather news for potential selection based on positivity
  * 10 more news APIs can be found [here](https://rapidapi.com/blog/rapidapi-featured-news-apis/)
  * RapidAPI [Sentiment Analysis API](https://rapidapi.com/twinword/api/sentiment-analysis/) — looks to be the best option for a sentiment analysis API
  * [Microsoft Sentiment API](https://docs.microsoft.com/en-us/rest/api/cognitiveservices-textanalytics/3.0/Sentiment/Sentiment) — potential API to determine sentiment of given news story
  * Other sentiment analysis API options can be found [here](https://rapidapi.com/blog/sentiment-analysis-apis/)
  * [Zen Quotes API](https://zenquotes.io/) for constructive and motivational quotes
  * [Universal Inspirational Quotes API](https://rapidapi.com/HealThruWords/api/universal-inspirational-quotes/)
  
## Software to Install/Resources
* [Git](https://git-scm.com/downloads)
  * [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
* Wireframing: 
  * [Figma](https://www.figma.com/) (free for 3 designs)
  * [Adobe XD](https://www.adobe.com/products/xd.html)
* General Resources:
  * [Git](https://git-scm.com/downloads)
    * [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
* Wireframing: 
  * [Figma](https://www.figma.com/) (free for 3 designs)
  * [Adobe XD](https://www.adobe.com/products/xd.html)
* General Resources:
  * [Visual Studio Code Download](https://code.visualstudio.com/)
  * [JavaScript Basics](https://learnjavascript.online/)
  * [Node.js Download](https://nodejs.org/en/download/)
* Frontend: 
  * [React.js](https://reactjs.org/)
  * JavaScript framework that is one of the most popular for web development
  * [Written Tutorial](https://reactjs.org/tutorial/tutorial.html)
  * [YouTube Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
* Backend: 
  * [MongoDB](https://www.mongodb.com/)
    * Database — stores information gathered by APIs
  * [Express.js Installation](https://expressjs.com/en/starter/installing.html) (first install Node.js)
    * Used for API Calls
    * [Express tutorial with MongoDB](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
  * Building a REST API with MongoDB, Express, and Node.js [Tutorial](https://youtu.be/fgTGADljAeg) (very helpful)
* [MERN Stack Tutorial](https://www.youtube.com/watch?v=7CqJlxBYj-M) on YouTube

## Competition for Ideas

* Website Competitors: 
  * The subreddit [r/upliftingnews](https://www.reddit.com/r/UpliftingNews/)
  * [Good News Network](https://www.goodnewsnetwork.org/)
  * Some news corporations have pages on their websites for good news, e.g. those of [Today](https://www.today.com/news/good-news) and [CBS](https://www.cbsnews.com/theuplift/)

* Application Competition:
  * [Moodboost](https://apps.apple.com/us/app/moodboost-good-news-only/id1375114377)
  * [Lapis News](https://apps.apple.com/us/app/lapis-news-only-the-good-news/id1527590034)

## Miscellaneous Resources
* [ACM’s Advice](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit) for you to be successful in ACM Projects


## GitHub Cheat Sheet
(Thanks Emily ^-^)

General Use

| Command | Description |
| ------ | ------ |
| cd "NewsUp" | Change directories over to our repository |
| git branch | Lists branches for you |
| git branch "branch name" | Makes new branch |
| git checkout "branch name" | Switch to branch |
| git checkout -b "branch name" | Same as 2 previous commands together |
| git add . | Finds all changed files |
| git commit -m "Testing123" | Commit with message |
| git push origin "branch" | Push to branch |
| git pull origin "branch" | Pull updates from a specific branch |

