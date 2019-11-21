export class UserDto {
  readonly username: String | undefined;

  password: String | undefined;

  readonly email: String | undefined;

  readonly firstName: String | undefined;

  readonly secondName: String | undefined;

  readonly birthDate: Date | undefined;

  readonly verified: Boolean | undefined;

  readonly weight: Number | undefined;

  readonly height: Number | undefined;

  readonly goal: Number | undefined;

  readonly presets: Array<String> | undefined;

  readonly trainings: Array<String> | undefined;
}
