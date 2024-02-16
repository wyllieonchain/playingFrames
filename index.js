const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node App with Custom Meta Tags</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <meta property="og:image" content="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />

      <meta name="fc:frame" content="vNext">
      <meta name="fc:frame:image" content="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg">
      <meta name="fc:frame:button:1" content="Spec">
      <meta name="fc:frame:button:1:action" content="link">
      <meta name="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec">
      
      <meta name="fc:frame:button:2" content="Image">
      <meta name="fc:frame:button:2:action" content="link">
      <meta name="fc:frame:button:2:target" content="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg">
      
      <meta name="fc:frame:button:3" content="Frame Validator">
      <meta name="fc:frame:button:3:action" content="link">
      <meta name="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames">
      
      <meta name="fc:frame:button:4" content="Replit">
      <meta name="fc:frame:button:4:action" content="link">
      <meta name="fc:frame:button:4:target" content="https://replit.com/@MalcolmWyllie/playingFrames#index.js">
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a simple Node.js app serving some HTML with custom meta tags.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
