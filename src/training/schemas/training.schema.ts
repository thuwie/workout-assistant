import { Schema } from 'mongoose';

export const TrainingSchema = new Schema({
  presetId: { type: Schema.Types.ObjectId, ref: 'Preset' },
  userId: String,
  name: String,
  placed: Array,
});
