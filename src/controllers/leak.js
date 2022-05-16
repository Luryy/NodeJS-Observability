import { randomBytes } from "crypto";
import Event from "events";
const event = new Event();
event.setMaxListeners(10000);
const items = [randomBytes(99999)];

export async function leakController(req, res) {
  for (let i = 0; i < 3000; i++)
    event.on("data", () => {
      items.push(items);
    });

  for (let i = 0; i < 3000; i++) event.emit("data", randomBytes(99999));

  res.status(200).send({ ok: "leak" });
}
