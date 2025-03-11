const express = require("express");
const cors = require("cors");

const dbConnection = require("./config/db");
const index = require("./routers");
const decodeToken = require("./middleware/decode");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",decodeToken, index);


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
