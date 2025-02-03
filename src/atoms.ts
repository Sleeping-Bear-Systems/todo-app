import { atom } from "jotai";

const apiUrl = import.meta.env.VITE_API_URL as string;
export const apiUrlAtom = atom(apiUrl);
