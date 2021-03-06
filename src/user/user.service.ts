import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {
  }

  async create(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async find(query?: Object): Promise<User[]> {
    return this.UserModel.find(query).populate('trainings').populate('presets').exec();
  }

  async findOne(query?: Object): Promise<User | null> {
    return this.UserModel.findOne(query).populate('trainings').populate('presets').exec();
  }

  async findById(id: Types.ObjectId): Promise<User | null> {
    return this.UserModel.findById(id).populate('trainings').populate('presets').exec();
  }

  async update(_id: Types.ObjectId, userDto: UserDto): Promise<User> {
    return this.UserModel.updateOne({ _id }, userDto);
  }

  async delete(_id: Types.ObjectId): Promise<object> {
    return this.UserModel.deleteOne({ _id });
  }
}
