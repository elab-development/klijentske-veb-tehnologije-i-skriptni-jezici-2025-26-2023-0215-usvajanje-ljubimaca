import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    savedPets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  },
  { timestamps: true }
);

export const UserModel = model('User', userSchema);
