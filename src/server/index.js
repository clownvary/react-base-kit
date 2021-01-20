const express = require('express');
const json = require('./mockData.json');

const app = express();

app.get('/api/weather/city', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(json));
  res.end();
});

app.listen(9991, () => {
  console.log('server listen on localhost:9991.....');
});
