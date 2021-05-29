const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

const stripe = new Stripe("private key")

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "raspberry",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    res.send({ message: "Succesful payment" });
  } catch {
    console.log(error);
    res.json({ message: error });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});
