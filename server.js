import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello" });
});

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server running at localhost:${port}`));
}
export default app;
