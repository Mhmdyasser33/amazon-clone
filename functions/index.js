const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// to make a connection between server and stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello with Mohamed in Node.js");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  /*
  this result is sessionID token from stripe api
  and user will use it take confirm payment operation
   */
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// endpoint will be used
// http://127.0.0.1:5001/clone-cfa1b/us-central1/api

// Listen command
exports.api = functions.https.onRequest(app);
