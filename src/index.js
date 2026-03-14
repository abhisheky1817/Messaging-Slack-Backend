import express from 'express';
import { PORT } from './config/serverconfig.js';
import { StatusCodes } from 'http-status-codes';
import connectDB from './config/dbconfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong working' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
