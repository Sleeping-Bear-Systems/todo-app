import { atom } from "jotai";

const apiUrl = import.meta.env.VITE_API_URL;
export const apiUrlAtom = atom(apiUrl);
