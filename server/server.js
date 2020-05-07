const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())
//Middleware
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

// const scores = require('./api/scores')

// app.use('/api/scores', scores)
// //Handle production
// if(process.env.NODE_ENV === 'production'){
//   //Static folder
//   app.use(express.static(__dirname + '/public/'));
//   //Handle SPA
//   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }


MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('quiz');
    const scoresCollection = db.collection('scores');
    const scoresRouter = createRouter(scoresCollection);
    app.use('/api/scores', scoresRouter);
  })
  .catch(console.error);

  app.listen(3000, function() {
    console.log(`Quiz server running on port ${this.address().port}`);
  });
