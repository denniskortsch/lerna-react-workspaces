import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("hello from the apii");
});

app.listen(8888);
