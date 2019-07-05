import express from "express";
import bodyParser from "body-body";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at localhost:${port}`));
