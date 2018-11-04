import express from 'express';
import compression from 'compression';  // compresses requests
import dotenv from 'dotenv';

import { routes } from './app.routes';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({path: '.env'});

// Create Express server
const app = express();
// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());

app.use(routes);

export default app;
