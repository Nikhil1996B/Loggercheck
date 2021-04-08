const cors = require("cors");
const express = require("express");
const Stripe = require("stripe");
// TODO: add a stripe key
const stripe = new Stripe("sk_test_51Hh7fGIAmHfKDL1SeQv8NZoq43yx8183xoVnhP8pSVVKc77d1z5TbkA0V4mPKpTeEFwuHJKf9Z53XFwiVs6t8Ilm009WZbOlKf")
const uuid = require("uuid");

const app = express();

// middleware
app.use(express.json())
app.use(cors())

//routes 
app.get('/', (req, res) => {
  res.send("IT WORKS AT WEBSITE. I LEARN CODE ONLINE!")
})

app.post("/api/payment_intents", async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        description: 'Software development services',
        shipping: {
          name: 'Nikhil B',
          address: {
            line1: '510 Trecking',
            postal_code: '98140',
            city: 'Las Vegas',
            state: 'CA',
            country: 'US',
          },
        },
      });
      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
})

//listen

app.listen(8282, () => {
  console.log('listening at port 8282')
})