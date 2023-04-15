const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 3000

const SplashApiData = require('./SplashApi/data.json')
app.use(cors()); 
app.get('/api/SplashSetting', (req, res) => {
  res.send(SplashApiData);
});

app.listen(Port, () => {
    console.log("Hello yes I");
  console.log('Server listening on port 3000.');
});