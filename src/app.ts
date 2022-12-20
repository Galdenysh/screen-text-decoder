import express from "express";
import cors from "cors";
import { PORT } from "./app.config.js";
import decoderRouter from "./routes/decoder.js";

const app = express();

app.use(cors());

app.use("/api/decoder", decoderRouter);

app.listen(+PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
