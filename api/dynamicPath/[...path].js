// api/dynamicPath/[...path].js
module.exports = (req, res) => {
  const { path } = req.query;
  res.setHeader("Content-Type", "text/html");

  let greeting = "there";

  if (path) {
    // If path is a string, set greeting to path
    greeting = Array.isArray(path) ? path.join("/") : path;
  }

  res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Greetings</title>
      </head>
      <body>
        <h1>Hi ${greeting}!</h1>
      </body>
    </html>`);
};
