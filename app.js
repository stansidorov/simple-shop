const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/user");

const app = express();

// A link to the MongoDb Atlas
const dburi =
  "mongodb+srv://nodeshop:" +
  process.env.MONGO_ATLAS_PW +
  "@cluster0.3dsvs.mongodb.net/Cluster0?retryWrites=true&w=majority";

// Do not use mongoose promises but node.js default implementation
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(dburi, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan("dev"));
// Makes uploads dir publicly available by using express static method
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
// setting up headers
app.use((req, res, next) => {
  // can restrict the access to the service
  res.header("Access-Control-Allow-Origin", "*");
  // set what headers allowed
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // set what methods allowed
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);

// handle all routes errors that are not existed in this app
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// for all unhandled errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
