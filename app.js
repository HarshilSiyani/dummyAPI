const express = require('express');
const app = express();

app.get('/remit/rate/calculate', (req, res) => {
  const receiverCountry = req.query.receiverCountry;
  const senderCountry = req.query.senderCountry;
  const source = req.query.source;
  const amount = req.query.amount;

  const rate = {
    status: 'SUCCESS',
    rate: {
      senderAmount: amount,
      payAmount: amount * 1.0599,
      beneficiaryAmount: amount * 87.918,
      beneficiaryCurrency: 'KES',
      fxRate: 87.918,
      fee: 2.99
    }
  };

  res.json(rate);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
