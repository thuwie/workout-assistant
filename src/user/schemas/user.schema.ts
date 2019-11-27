import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  secondName: String,
  birthDate: Date,
  verified: Boolean,
  weight: Number,
  height: Number,
  goal: Number,
  presets: [{ type: Schema.Types.ObjectId, ref: 'Preset' }],
  trainings: [{ type: Schema.Types.ObjectId, ref: 'Training' }],
});
