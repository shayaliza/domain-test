// api/dynamicPath/[...path].js
module.exports = (req, res) => {
  const { path } = req.query;
  res.setHeader("Content-Type", "text/html");

  let greeting = "there";

  if (Array.isArray(path)) {
    // Use the last element of the array as the greeting
    greeting = path[path.length - 1];
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
