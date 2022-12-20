/* eslint-disable import/prefer-default-export */
import { Request, Response } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import { API_KEY, API_VISION_URL, FOLDER_ID } from "../app.config.js";
import { deepSearchAll } from "../utils/deepSearch.js";

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

    const response = await fetch(API_VISION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);

    const data = await response.json();
    const texts = deepSearchAll(data, "text");

    fs.writeFile(path.resolve(__dirname, "../../output/text.txt"), texts.join(", "), (err) => {
      // eslint-disable-next-line no-console
      if (err) console.error(err);
    });

    return res.status(200).send(texts);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).send({ message: "Server error" });
  }
};
