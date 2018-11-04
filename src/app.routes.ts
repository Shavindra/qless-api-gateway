import express from 'express';
import * as apiController from './services/api';
import { serviceProxyConfigs } from './config';
import proxy from 'http-proxy-middleware';

const app = express();

app.get('/', apiController.index);
app.get('/v1', apiController.index);
app.post('/v1', apiController.index);

serviceProxyConfigs.forEach((proxyService: any) => { // Need to be above bodyParser
    app.use(proxyService.apiPath, proxy(proxyService.config));
});

export const routes = app;
