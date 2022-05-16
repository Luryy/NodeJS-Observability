export function requestLogger(req, res, next) {
  console.log(
    JSON.stringify({
      method: req.method,
      path: req.path,
      headers: req.headers,
      body: req.body,
    })
  );
  next();
}
