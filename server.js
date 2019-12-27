const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Mateus!');
});

app.listen(3000);
