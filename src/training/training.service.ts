import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Training } from './interfaces/training.interface';
import { TrainingDto } from './dto/training.dto';

@Injectable()
export class TrainingService {
  constructor(@InjectModel('Training') private readonly TrainingModel: Model<Training>) {
  }

  async create(trainingDto: TrainingDto): Promise<Training> {
    const createdTraining = new this.TrainingModel(trainingDto);
    return createdTraining
      .save();
  }
// TODO doesn't populate
  async find(query?: Object): Promise<Training[]> {
    return this.TrainingModel
      .find(query)
      .populate('presets')
      .exec();
  }

  async findById(id: Types.ObjectId): Promise<Training | null> {
    return this.TrainingModel
      .findById(id)
      .populate('presets')
      .exec();
  }

  async update(_id: Types.ObjectId, userDto: TrainingDto): Promise<Training> {
    return this.TrainingModel
      .updateOne({ _id }, userDto);
  }

  async delete(_id: Types.ObjectId): Promise<object> {
    return this.TrainingModel
      .deleteOne({ _id });
  }
}
