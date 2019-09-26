import {
  Body, Controller, Get, Param, Post, Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
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
}
