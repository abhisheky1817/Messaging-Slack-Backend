import express from 'express';
import userRouter from './user.js';
import workspaceRouter from './workspaces.js';
import channelRouter from './channel.js';
import memberRouter from './member.js';
import messageRouter from './messages.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/workspaces', workspaceRouter);
router.use('/channel',channelRouter);
router.use('/members', memberRouter);
router.use('/messages', messageRouter);

export default router;
