import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = document.getElementById("root");
if (root === null) {
    throw Error("Unable to find DOM element #root");
}
createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
