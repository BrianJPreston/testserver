import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 8000;

const whitelist = [
  'http://localhost:5173',
  'https://testclient-eta.vercel.app/',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.get('/api/v1/data', cors(corsOptions), (req, res) => {
  res.send({
    message: 'Hello from the server',
  });
  console.log('endpoint hit');
});

app.listen(PORT, () => {
  console.log(`listening on port, ${PORT}`);
});
