import { Document } from 'mongoose';

export interface Preset extends Document {
  readonly userId: String;
  readonly name: String;
  readonly exercises: Array<String>;
  readonly trainings: Array<String>;
}
