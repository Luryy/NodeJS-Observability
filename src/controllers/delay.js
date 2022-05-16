import { setTimeout } from "timers/promises";

export async function delayController(req, res) {
  await setTimeout(3 * 1000);
  res.status(200).send({ ok: "delay" });
}
