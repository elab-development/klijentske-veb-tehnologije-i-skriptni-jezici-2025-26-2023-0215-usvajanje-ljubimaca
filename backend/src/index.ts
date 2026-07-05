import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectToDatabase } from './config/db';
import { petsRouter } from './routes/pets.routes';
import { authRouter } from './routes/auth.routes';
import { usersRouter } from './routes/users.routes';
import { errorMiddleware } from './middleware/error.middleware';

dotenv.config();

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pets', petsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.use(errorMiddleware);

const startServer = async (): Promise<void> => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`PetAdopt API running on port ${PORT}`);
  });
};

startServer();
