import { Document } from 'mongoose';

export interface ExerciseDictionary extends Document {
  readonly name: String;
  readonly icon: String;
  readonly description: String;
  readonly defaultWeight: Number;
  readonly maximumWeight: Number;
  readonly weightStep: Number;
}
