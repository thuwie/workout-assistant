import { Document } from 'mongoose';

export interface Exercise extends Document {
  readonly name: String;
  readonly icon: String;
  readonly description: String;
  readonly defaultWeight: Number;
}
