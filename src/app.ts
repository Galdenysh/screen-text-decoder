import express from "express";
import { PORT } from "./app.config.js";
import decoderRouter from "./routes/decoder.js";

const app = express();

app.use("/api/decoder", decoderRouter);

app.listen(+PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
