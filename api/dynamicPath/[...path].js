// api/dynamicPath/[...path].js
// module.exports = (req, res) => {
//   const { name } = req.query;
//   const fullPath = req.url; // Get the full path URL
//   res.setHeader("Content-Type", "text/html");

//   let greeting = "there";

//   if (name) {
//     greeting = name;
//   }

//   res.status(200).send(`<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Greetings</title>
//       </head>
//       <body>
//         <h1>Hi ${greeting}!</h1>
//         <p>Full path: ${fullPath}</p>
//       </body>
//     </html>`);
// };
// api/dynamicPath/[...path].js
// api/dynamicPath/[...path].js
// api/dynamicPath/[...path].js
// api/dynamicPath/[...path].js
module.exports = (req, res) => {
  try {
    const { name } = req.params;
    const fullPath = req.url; // Get the full path URL
    console.log("Request received:", req);

    let greeting = "there";

    if (name) {
      greeting = name;
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
  } catch (error) {
    console.error("Error in serverless function:", error);
    res.status(500).send("Internal Server Error");
  }
};
