const path = require ('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 80;

app.use(express.static(publicPath));



app.get('/api/mining/:coin', (req, res) => {
   console.log(CoinsData.getCoinByName(req.params.coin));
   res.json(CoinsData.getCoinByName(req.params.coin));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up! listening on port: ${port}`);
});


const data = require('./coins/data');
const CoinsData = new data();