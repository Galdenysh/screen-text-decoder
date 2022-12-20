import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT ?? "4000";
export const API_KEY = process.env.API_KEY ?? "AQVNwTsdi0JYhHIDz5PAJ61xIaTyPsvIkGiMzgPV";
export const API_URL = process.env.API_URL ?? "https://vision.api.cloud.yandex.net/vision/v1/batchAnalyze";
export const FOLDER_ID = process.env.FOLDER_ID ?? "b1gtbmo4ht47ancvvs9t";
