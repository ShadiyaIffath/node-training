import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import http from 'http';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.PORT;
const mongoURL = process.env.MONGODB;

app.use(
	cors({
		credentials: true,
	})
);

app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server running on localhost port ${port}`);
});

try {
    mongoose.connect(mongoURL);
    console.log('Database connection successful.')
  } catch (error) {
    console.log(`error occured: ${error}`)
  }
mongoose.connection.on('connection', (stream) => {
	console.log('Connection established with database');
});
