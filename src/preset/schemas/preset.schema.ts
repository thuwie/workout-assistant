import { Schema } from 'mongoose';

export const PresetSchema = new Schema({
  userId: String,
  name: String,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  trainings: [{ type: Schema.Types.ObjectId, ref: 'Training' }],
});
