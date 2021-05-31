import express, { Router } from 'express';
import cors from 'cors';
import projects from './projects.js';

const app = express();
const v1 = new Router();

v1.use('/projects', projects);

app.use(cors());
app.use('/api/v1', v1);
app.listen(6842);