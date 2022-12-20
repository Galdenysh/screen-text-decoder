/* eslint-disable import/prefer-default-export */
import { Request, Response } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { FOLDER_ID } from "../app.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decoderImage = async (req: Request, res: Response) => {
  try {
    const file = fs.readFileSync(path.resolve(__dirname, "../../sample/penguins_sample.jpg"));
    const encoded = Buffer.from(file).toString("base64");
    const body = {
      folderId: FOLDER_ID,
      analyze_specs: [{
        content: encoded,
        features: [{
          type: "TEXT_DETECTION",
          text_detection_config: {
            language_codes: ["*"],
          },
        }],
      }],
    };

    return res.status(200).send({ message: body });
  } catch (e) {
    return res.status(500).send({ message: "Server error" });
  }
};
