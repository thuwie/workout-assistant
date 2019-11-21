import {
  Injectable, Inject, forwardRef, Body,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.find({ username });
    // TODO: get rid of index?
    if (user && user[0].password === pass) {
      const { email } = user[0];
      return { username, email };
    }
    return null;
  }

  async login(user: any) {
    const { username, email } = user;
    const jwtPayload = { username, email };
    return {
      access_token: this.jwtService.sign(jwtPayload),
    };
  }

  async signUp(@Body() createUserDto: UserDto) {
    try {
      const { username, email, password } = createUserDto;
      if (password === null) { return null; }
      const usr = await this.usersService.find({ $or: [{ username }, { email }] });
      if (usr.length !== 0) { return null; }
      await this.usersService.create(createUserDto);
      const jwtPayload = { username, email };
      return { access_token: this.jwtService.sign(jwtPayload) };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
