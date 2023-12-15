const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send({ ok: true, status: 'Server running' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
