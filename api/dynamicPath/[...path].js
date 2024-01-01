// api/dynamicPath/[...path].js
module.exports = (req, res) => {
  const { path } = req.query;
  const fullPath = req.url; // Get the full path URL
  res.setHeader("Content-Type", "text/html");

  let greeting = "there";

  if (path) {
    // If path is an array, use the last element as the greeting
    if (Array.isArray(path)) {
      greeting = path[path.length - 1];
    } else {
      // If path is a string, use it as the greeting
      greeting = path;
    }
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
        <p>Full path: ${fullPath}</p>
      </body>
    </html>`);
};
