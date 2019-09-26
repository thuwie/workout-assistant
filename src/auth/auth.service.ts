import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private static signToken(payload: string | Buffer | object, access: boolean = true) {
    const secret = (access) ? process.env.JWT_SECRET : process.env.JWT_REFRESH_SECRET;
    const tokenLife = (access) ? process.env.TOKEN_LIFE : process.env.TOKEN_REFRESH_LIFE;
    return sign(payload, `${secret}`, {
      algorithm: 'HS256',
      expiresIn: tokenLife,
    });
  }

  initToken(body: any): any {
    const { username, password } = body;

    // TODO(ipolyakov): paste your ORM code here!
    const validPassword = 'a';
    const validUsername = 'b';
    if (validPassword === password && validUsername === username) {
      const accessToken = AuthService.signToken({ user: username });
      const refreshToken = AuthService.signToken({ user: username }, false);
      return {
        status: 200,
        success: true,
        err: null,
        accessToken,
        refreshToken,
      };
    }
    return {
      status: 404,
      success: false,
      err: 'Invalid data',
    };
  }

  signup(body: any): any {
    // req.params.id
    return `ID: ${body.id}, Not implemented yet`;
  }
}
