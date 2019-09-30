import { Document } from 'mongoose';

export interface Training extends Document {
  readonly presetId: String;
  readonly userId: String;
  readonly name: String;
  readonly placed: Array<Date>;
}
