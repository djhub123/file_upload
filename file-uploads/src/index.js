const express = require("express");

const productController = require("./controllers/gallery.controller");
const userController=require("./controllers/user.controller");
const app = express();
app.use(express.json());

app.use("/products", productController);
app.use('/user',userController);
module.exports = app;
