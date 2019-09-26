import { Schema } from 'mongoose';

export const TrainingSchema = new Schema({
  presetId: Number,
  userId: Number,
  name: String,
  placed: Array,
});
