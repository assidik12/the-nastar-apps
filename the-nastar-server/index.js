import express from "express";
import bodyParser from "body-parser";
import product from "./routers/product.js";
import accounts from "./routers/account.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/account", accounts);
app.use("/product", product);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
