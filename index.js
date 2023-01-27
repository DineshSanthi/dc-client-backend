const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");

app.use(cors());

const mongoose = require("mongoose");

// MongoDB Connection
async function connectDB() {
  mongoose.connect(
    "mongodb+srv://admin:admin@desi-chowrastha.3cy7m.mongodb.net/Desi-Chowrastha",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("db connected");
}
connectDB();

app.use(
  express.json({
    extended: false,
  })
);

app.get("/", (req, res) =>
  res.send("Desi Chowrastha Client Backend Server is Running")
);

// MENU ROUTE
app.use("/menu", require("./Routes/menu.routes"));
app.use("/menu-items", require("./Routes/menu-items.routes"))

// TODAY OFFERS ROUTE
app.use("/today-offers", require("./Routes/today-offers.routes"));

// CHECKOUT ROUTE
app.use("/checkout", require("./Routes/checkout.routes"));

// USER ROUTE
app.use("/user", require("./Routes/user.routes"));

app.listen(port, () =>
  console.log("Desi Chowrastha Client Backend Server is Running on Port 5000")
);
