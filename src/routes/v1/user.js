import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'User route working' });
});

router.get('/:id', (req, res) => {
    res.startus(200).json({ message: `User with id ${req.params.id} found`});
})

export default router;
