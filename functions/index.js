const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// Endpoint will be used
// http://127.0.0.1:5001/clone-cfa1b/us-central1/api

app.get("/", (req, res) => res.status(200).send("Hello with mohamed Yasser"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
