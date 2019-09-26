import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  secondName: String,
  birthDate: Date,
  verified: Boolean,
  weigth: Number,
  heigth: Number,
  goal: Number,
});
