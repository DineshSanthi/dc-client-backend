const axios = require("axios");
const stripe = require("stripe")(
  "sk_test_51LWhLHCoBceSbLgtFW2Uh462COKI99obFSKznU1VqFU1MUloJrHeRduV3I4QYbVTyhMxpLGnfGylTIaS4EogiHhb00hUYRkAXh"
);

const checkout = async (req, res) => {
  // FETCHING DETAILS
  const userMobileNumber = req.body.mobileNumber;
  const totalPrice = req.body.totalPrice;

  // PARSING `totalPrice`
  const amount = parseFloat(totalPrice * 100);

  // STRIPE CHECKOUT SESSION
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Desi Chowrastha",
          },
          unit_amount_decimal: amount,
        },
        quantity: 1,
      },
    ],
    phone_number_collection: {
      enabled: false,
    },
    mode: "payment",
    success_url: "https://desichowrastha-dev.web.app/#/menu",
    cancel_url: "https://desichowrastha-dev.web.app/#/menu",
  });

  res.json({ url: session.url });
};

module.exports = {
  checkout,
};
