import {
  Controller, Post, UseGuards, Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }


  @UseGuards(AuthGuard('local'))
  @Post('login')
  // @ts-ignore
  // TODO: use @Req() req: Request
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
