import { Exercise } from '../interfaces/exercise.interface';

export class PresetDto {
  readonly userId: Number | undefined;

  readonly name: String | undefined;

  readonly exercises: Array<Exercise> | undefined;
}
