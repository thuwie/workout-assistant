import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: String;
  readonly password: String;
  readonly email: String;
  readonly firstName: String;
  readonly secondName: String;
  readonly birthDate: Date;
  readonly verified: Boolean;
  readonly weight: Number;
  readonly height: Number;
  readonly goal: Number;
  readonly presets: Array<String>;
  readonly trainings: Array<String>;
}
