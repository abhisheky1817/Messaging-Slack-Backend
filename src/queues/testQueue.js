import { Queue } from 'bullmq';
import redisConfig from '../config/redisConfig.js';

export default new Queue('testQueue', {
  connection: redisConfig,
});