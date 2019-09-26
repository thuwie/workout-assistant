import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createCatDto);
    return createdUser.save();
  }

  async find(query?: Object): Promise<User[]> {
    return this.UserModel.find(query).exec();
  }

  async findById(id: Types.ObjectId): Promise<User | null> {
    return this.UserModel.findById(id).exec();
  }
}
