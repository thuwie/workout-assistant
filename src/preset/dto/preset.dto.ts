export class PresetDto {
  readonly userId: String | undefined;

  readonly name: String | undefined;

  readonly exercises: Array<String> | undefined;

  readonly trainings: Array<String> | undefined;
}
