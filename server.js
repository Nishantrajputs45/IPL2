const economicalData = require('./YearWiseEconomicalBowler.json');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/economy', (req, res) => {
    let year =req.query.year;
    let t=year.split(",");
    const result={};
   for(let i=parseInt(t[0]);i<=parseInt(t[1]);i++)
   {
      result[i] =economicalData.fetchTopTenBowlerYearWise[i];
    
   }
  
   res.send(result);
});

app.listen(process.env.PORT || 8000, () => console.log('Gator app listening on port 8000!'));