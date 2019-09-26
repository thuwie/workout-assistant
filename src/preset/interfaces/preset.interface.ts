import { Document } from 'mongoose';
import { Exercise } from './exercise.interface';

export interface Preset extends Document {
  readonly userId: Number;
  readonly name: String;
  readonly exercises: Array<Exercise>;
}
