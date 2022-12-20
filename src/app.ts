import express from "express";
import { PORT } from "./app.config.js";

const app = express();

app.listen(+PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
