import {
  Body, Controller, Delete, Get, Param, Post, Put, Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async create(@Body() createUserDto: UserDto) {
    this.userService.create(createUserDto);
  }

  @Get('all')
  async getAll(): Promise<User[]> {
    return this.userService.find();
  }

  @Get('search')
  async findAll(@Query() query: any): Promise<User[]> {
    console.log(query);
    return this.userService.find(query);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(Types.ObjectId(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<User | null> {
    return this.userService.update(Types.ObjectId(id), userDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.userService.delete(Types.ObjectId(id));
  }
}
