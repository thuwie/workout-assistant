import {
  Injectable, Inject, forwardRef, Body,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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
    const user = await this.usersService.findOne({ username });
    if (!user) { return null; }
    const { email, password } = user;
    const passwordIsOk = await bcrypt
      .compare(pass, password.toString());
    if (passwordIsOk) {
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
      const usr = await this.usersService.findOne({ $or: [{ username }, { email }] });
      if (usr) { return null; }
      const tmpUser = createUserDto;
      tmpUser.password = await bcrypt.hash(password, 10);
      await this.usersService.create(tmpUser);
      const jwtPayload = { username, email };
      return { access_token: this.jwtService.sign(jwtPayload) };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
