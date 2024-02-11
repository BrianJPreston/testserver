import express from 'express';

const app = express();

const PORT = 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', [
    'http://localhost:5173',
    'https://testclient-eta.vercel.app/',
  ]);
  next();
});

app.get('/api/v1/data', (req, res) => {
  res.send({
    message: 'Hello from the server',
  });
  console.log('endpoint hit');
});

app.listen(PORT, () => {
  console.log(`listening on port, ${PORT}`);
});
