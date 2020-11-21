import express from 'express';
import { db } from '../settings.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json({ message: db })
);

export default indexRouter;