const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;
const categoryRoutes = require("./routes/categoryRoute");

app.use((req, res, next) => {
  console.log("path " + req.path + "method " + req.method);
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`DB connected ,app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/menus/category", categoryRoutes);

