const express = require('express');
const router = express.Router();
const axios = require('axios');

// DANA Payment Integration
router.post('/dana', async (req, res) => {
  const { orderId, amount, customerId } = req.body;

  try {
    const response = await axios.post('https://api.dana.id/payment', {
      merchantId: 'YOUR_MERCHANT_ID',
      orderId,
      amount,
      customerId,
      callbackUrl: 'https://yourwebsite.com/payment/callback'
    }, {
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
