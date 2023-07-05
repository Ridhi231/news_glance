import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
const app= express();
app.use(cors());
app.use('/',Route);

const PORT=8000;
Connection();
app.listen(PORT,()=>console.log(`hello! server started on port ${PORT}`));
DefaultData();