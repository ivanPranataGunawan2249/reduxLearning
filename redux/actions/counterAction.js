import { TAMBAH, KURANG } from "./types";

export const tambahCounter = (counter) => ({
  type: TAMBAH,
  payload: counter,
});

export const kurangCounter = (counter) => ({
  type: KURANG,
  payload: counter,
});
