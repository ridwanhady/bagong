const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ShortUrl = require('./models/ShortUrl');

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({fullUrl: req.body.fullUrl});

  res.redirect('/');
});

app.listen(process.env.PORT || 5000);

console.log('Server started!');
