import express from 'express';
import { getAllItems } from '../controllers/itemsController.js';

const itemRouter = express.Router();

itemRouter.get('/', getAllItems);

export default itemRouter;
