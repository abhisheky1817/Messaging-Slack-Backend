import express from 'express';
import { PORT } from './config/serverconfig.js';
import { StatusCodes } from 'http-status-codes';
import connectDB from './config/dbconfig.js';
import apiRoutes from './routes/apiRoutes.js';
import mailer from './config/mailConfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong working' });
});

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();

  //setting up mailer code
  const mailResponse = await mailer.sendMail({
    from: 'ay992580@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from the Node.js app.'
  });

  console.log('Mail response:', mailResponse);

});
