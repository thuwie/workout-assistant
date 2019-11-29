import { Schema } from 'mongoose';

export const ExerciseDictionarySchema = new Schema({
  name: String,
  icon: String,
  description: String,
  defaultWeight: Number,
  maximumWeight: Number,
  weightStep: Number,
});
