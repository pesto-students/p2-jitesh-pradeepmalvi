const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send({ status: "API running!" }));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
