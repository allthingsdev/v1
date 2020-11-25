import express from 'express';
import { getAllCategories } from '../controllers/categoriesController.js';
import { db } from '../settings.js';

const catRouter = express.Router();

catRouter.get('/', getAllCategories);

export default catRouter;
