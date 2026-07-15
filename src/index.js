import express from 'express';
import { createServer } from 'http';
import { PORT } from './config/serverConfig.js';
import { StatusCodes } from 'http-status-codes';
import bullServerAdapter from './config/bullBoardConfig.js';
import connectDB from './config/dbconfig.js';
import apiRoutes from './routes/apiRoutes.js';
import ChannelSocketHandlers from './controllers/channelSocketController.js';
import MessageSocketHandlers from './controllers/messageSocketController.js';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ui', bullServerAdapter.getRouter());

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong working' });
});

app.use('/api', apiRoutes);

io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  // setTimeout(() => {
  //   socket.emit('message', { message: 'Hello from server' });
  // }, 2000);

   MessageSocketHandlers(io, socket);
  ChannelSocketHandlers(io, socket);

});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
