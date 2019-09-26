import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('/auth')
  async auth(@Body() body: any): Promise<object> {
    return this.authService.initToken(body);
  }

  @Post('/signup')
  async signup(@Body() body: any): Promise<object> {
    return this.authService.signup(body);

  }
}
