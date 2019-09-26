import { Document } from 'mongoose';

export interface Training extends Document {
  readonly presetId: Number;
  readonly userId: Number;
  readonly name: String;
  readonly placed: Array<Date>;
}
