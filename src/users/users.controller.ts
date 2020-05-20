import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get("all")
  findAll(@Req() request: Request): string {
    return 'This action returns all users';
  }

  @Get("GetTime")
  GetTime(@Req() request: Request): string {
    return (new Date()).toISOString();
  }
}
