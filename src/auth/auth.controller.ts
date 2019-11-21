import {
  Controller, Post, UseGuards, Request, Body, HttpException, HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';


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

  @Post('signUp')
  async signUp(@Body() createUserDto: UserDto) {
    const retVal = await this.authService.signUp(createUserDto);
    if (retVal == null) throw new HttpException('Bad request.', HttpStatus.BAD_REQUEST);
    return retVal;
  }
}
