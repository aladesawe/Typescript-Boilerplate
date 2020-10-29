import bodyParser from 'body-parser';
import express from 'express';

import { monitor } from './apis/monitor';
import { errorHandler, handle404, serviceLogger } from './middlewares/index';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/monitor', monitor); 
app.use('*', handle404);

app.use(errorHandler);
app.use(serviceLogger);


export default app;
