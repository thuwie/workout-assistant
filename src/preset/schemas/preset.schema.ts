import { Schema } from 'mongoose';

export const PresetSchema = new Schema({
  userId: Number,
  name: String,
  exercises: Array,
});
