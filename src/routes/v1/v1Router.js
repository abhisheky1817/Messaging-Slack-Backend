import express from 'express';
import userRouter from './user.js';
import workspaceRouter from './workspaces.js';
import channelRouter from './channel.js';
import memberRouter from './member.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/workspaces', workspaceRouter);
router.use('/channel',channelRouter);
router.use('/members', memberRouter);

export default router;
