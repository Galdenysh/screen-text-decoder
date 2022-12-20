import { Router } from "express";
import { decoderImage } from "../controllers/decoder.js";

const decoderRouter = Router();

// /api/decoder
decoderRouter.get("/", decoderImage);

export default decoderRouter;
