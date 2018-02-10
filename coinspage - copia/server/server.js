const path = require ('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 80;

const axios = require ('axios');
const coinsGET = require('./coins/coinsGetFunc');
const coinget = new coinsGET();

const CoinsData = require('./coins/coinsData');
const coinsData = new CoinsData();

app.use(express.static(publicPath));


app.get('/coins/data/json/gobyte*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const urls = coinsData.data.gobyte;
    axios.all([coinget.GetDiff(urls.diff), coinget.GetNethash(urls.nethash),coinget.GetBlockCount(urls.blockcount)])
        .then(axios.spread( (diff, nethash, blockcount) => {
            const data = {
                diff: diff.data,
                nethash: nethash.data,
                blockcount: blockcount.data
            }
            res.json(data);
    }));
});

app.get('/test/all*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const urls = {
        gobyte: coinsData.data.gobyte
    }
    const data = [];
    axios.all([
            coinget.GetDiff(urls.gobyte.diff), 
            coinget.GetNethash(urls.gobyte.nethash),
            coinget.GetBlockCount(urls.gobyte.blockcount)
        ])
        .then(
            axios.spread( 
                (diff, nethash, blockcount) => {
                    data.push({
                        diff: diff.data,
                        nethash: nethash.data,
                        blockcount: blockcount.data
                    });
            
            res.json(data);
        })
    );
});

app.get('/test/gobyte*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const url = require('./coins/coinsData').gobyte.getUrls();
    axios.all([coinget.GetDiff(url.diff), coinget.GetNethash(url.nethash),coinget.GetBlockCount(url.blockcount)])
        .then(axios.spread( (diff, nethash, blockcount) => {
            const data = {
                diff: diff.data,
                nethash: nethash.data,
                blockcount: blockcount.data
            };
            res.json(data);
    }));
});

app.get('/coins/calculator/*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    axios.get(`http://whattomine.com/coins.json`)
        .then(respuesta => {
            res.json(respuesta.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up! listening on port: ${port}`);
});
