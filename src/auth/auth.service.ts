import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

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
    const jwtPayload = { username: user.username, email: user.email };
    return {
      access_token: this.jwtService.sign(jwtPayload),
    };
  }
}
