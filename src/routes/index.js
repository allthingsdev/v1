import express from 'express';
import { dbconn } from '../settings.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json({ message: dbconn })
);

export default indexRouter;