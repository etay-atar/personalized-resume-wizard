const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

app.post('/pay', async (req, res) => {
  const { amount, payment_method } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method,
      confirm: true,
    });

    res.send({ success: true, paymentIntent });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
});

app.listen(port, () => console.log(`Payments server running on port ${port}`));
