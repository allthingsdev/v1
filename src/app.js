import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import catRouter from './routes/categories.js';
import itemRouter from './routes/items.js';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1', indexRouter);
app.use('/categories', catRouter);
app.use('/items', itemRouter);

export default app;
