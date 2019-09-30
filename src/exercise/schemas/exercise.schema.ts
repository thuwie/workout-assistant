import { Schema } from 'mongoose';

export const ExerciseSchema = new Schema({
  name: String,
  icon: String,
  description: String,
  defaultWeight: Number,
});
