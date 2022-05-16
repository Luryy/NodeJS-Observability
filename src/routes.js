import { delayController } from "./controllers/delay.js";
import { errorController } from "./controllers/error.js";
import { leakController } from "./controllers/leak.js";
import { successController } from "./controllers/success.js";

export function setupRoutes(app) {
  app.get("/success", successController);
  app.get("/error", errorController);
  app.get("/delay", delayController);
  app.get("/leak", leakController);
}
