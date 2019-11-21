import {
  Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async getAll(): Promise<User[]> {
    return this.userService.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async findAll(@Query() query: any): Promise<User[]> {
    return this.userService.find(query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async find(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(Types.ObjectId(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<User | null> {
    return this.userService.update(Types.ObjectId(id), userDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.userService.delete(Types.ObjectId(id));
  }
}
