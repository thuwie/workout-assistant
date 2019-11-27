import { Schema } from 'mongoose';

export const ExerciseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  exerciseDictionaryId: { type: Schema.Types.ObjectId, ref: 'ExerciseDictionary' },
  weight: Number,
  repetitionCount: Number,
});
