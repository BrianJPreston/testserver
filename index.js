//Basic Server 

import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 8000;

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://testclient-eta.vercel.app'],
  })
);

app.get('/api/v1/data', (req, res) => {
  res.send({ message: 'Hello from the server' });
  console.log('Data Requested');
});

app.listen(PORT, () => {
  console.log(`listening on port, ${PORT}`);
});
