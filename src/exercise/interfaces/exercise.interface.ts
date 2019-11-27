import { Document } from 'mongoose';

export interface Exercise extends Document {
  readonly userId: String;
  readonly exerciseDictionaryId: String;
  readonly weight: Number;
  readonly repetitionCount: Number;
}
