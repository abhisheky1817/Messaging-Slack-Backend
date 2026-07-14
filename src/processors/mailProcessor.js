import { Worker } from 'bullmq';
import redisConfig from '../config/redisConfig.js';
import mailer from '../config/mailConfig.js';

new Worker(
  'mailQueue',
  async (job) => {
    const emailData = job.data;
    console.log('Processing email', emailData);

    try {
      const response = await mailer.sendMail(emailData);
      console.log('Email sent', response);
    } catch (error) {
      console.log('Error processing email', error);
      throw error;
    }
  },
  {
    connection: redisConfig,
  }
);