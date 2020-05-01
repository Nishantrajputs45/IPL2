const economicalData = require('./YearWiseEconomicalBowler.json');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/economy', (req, res) => {
    let year =req.query.year;
    const result =economicalData.fetchTopTenBowlerYearWise[year];
    res.send(result);
});

app.listen(process.env.PORT || 8000, () => console.log('Gator app listening on port 8000!'));