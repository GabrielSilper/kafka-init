const express = require('express');
const { sendMessage } = require('./kafka-poducer-config');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send({ ok: true, status: 'Server running' });
});

app.post('/message', async (req, res) => {
  const { message } = req.body;
  await sendMessage(message);
  res.send({ ok: true });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
