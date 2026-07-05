import { Schema, model } from 'mongoose';

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['dog', 'cat', 'bird', 'rabbit', 'other'], required: true },
    breed: { type: String, required: true },
    location: { type: String, required: true },
    age: { type: String, enum: ['puppy', 'young', 'adult', 'senior'], required: true },
    size: { type: String, enum: ['small', 'medium', 'large'], required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    temperament: [{ type: String }],
    description: { type: String, required: true },
    isVaccinated: { type: Boolean, default: false },
    imageUrl: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const PetModel = model('Pet', petSchema);
