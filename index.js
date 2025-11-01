import express from "express";

const app = express();

const VERCEL_URL = "https://easyexit.vercel.app";

app.get("*", (req, res) => {
  const target = `${VERCEL_URL}${req.originalUrl}`;
  res.redirect(301, target);
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Redirecting all traffic to ${VERCEL_URL}`));
