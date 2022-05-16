import express from "express";
import { setupRoutes } from "./routes.js";
import expressPromMiddleware from "express-prom-bundle";
import { requestLogger } from "./controllers/logger.js";

const app = express();
const PORT = 3000;

app.use(
  expressPromMiddleware({
    includePath: true,
    includeMethod: true,
    promClient: { collectDefaultMetrics: {} },
  })
);

app.use(requestLogger);

setupRoutes(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
