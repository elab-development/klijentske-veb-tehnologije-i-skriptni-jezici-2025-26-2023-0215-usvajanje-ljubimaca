import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/petadopt';

export const connectToDatabase = async (): Promise<void> => {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');
};
