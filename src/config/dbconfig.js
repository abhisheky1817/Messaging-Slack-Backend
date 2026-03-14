import mongoose from 'mongoose';
import { DEVELOPMENT_DB_URL, NODE_ENV, PRODUCTION_DB_URL } from './serverconfig.js';

export default async function connectDB() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(DEVELOPMENT_DB_URL);
    } else if (NODE_ENV === 'production') {
      await mongoose.connect(PRODUCTION_DB_URL);
    }
    console.log(`Connected to MongoDB successfully in ${NODE_ENV} environment`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
