import "global-agent/bootstrap.js";
import got from "got";

(async () => {
  console.dir(await got("https://api.github.com", { http2: true }));
})().catch(console.dir);
