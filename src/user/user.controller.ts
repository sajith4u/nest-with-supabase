import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('details')
  getUserDetails(@Req() req: Request) {
    console.log({
      user: req.user,
      payload: req.body,
    });
    return { name: 'Sajith' };
  }
}
