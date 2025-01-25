// server.tsx
import { serveDir } from "https://deno.land/std@0.203.0/http/file_server.ts";

const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deno React App</title>
    <link rel="stylesheet" href="/css/style.css" />
    <img src="/images/sleeping_bear_logo.svg" alt="Sleeping Bear Logo" />
  </head>
  <body>
    <div id="root">Hello world!</div>
  </body>
  </html>
`;

Deno.serve((req) => {
  const { pathname } = new URL(req.url);

  if (pathname.startsWith("/css") || pathname.startsWith("/images")) {
    return serveDir(req, { fsRoot: "public" });
  }

  return new Response(html, { headers: { "content-type": "text/html" } });
});
console.log("Server is running on http://localhost:8000");
