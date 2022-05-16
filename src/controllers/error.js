export function errorController(req, res) {
  res.status(400).send({ error: "error" });
}
