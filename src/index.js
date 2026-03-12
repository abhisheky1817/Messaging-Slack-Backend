import express from 'express';
import { PORT } from './config/server.js';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong working' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
