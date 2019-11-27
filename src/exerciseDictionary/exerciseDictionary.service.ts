import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ExerciseDictionary } from './interfaces/exerciseDictionary.interface';
import { ExerciseDictionaryDto } from './dto/exerciseDictionary.dto';

@Injectable()
export class ExerciseDictionaryService {
  constructor(@InjectModel('ExerciseDictionary') private readonly ExerciseModel: Model<ExerciseDictionary>) {}

  async create(exerciseDto: ExerciseDictionaryDto): Promise<ExerciseDictionary> {
    const createdExercise = new this.ExerciseModel(exerciseDto);
    return createdExercise.save();
  }

  async find(query?: Object): Promise<ExerciseDictionary[]> {
    return this.ExerciseModel.find(query).exec();
  }

  async findById(id: Types.ObjectId): Promise<ExerciseDictionary | null> {
    return this.ExerciseModel.findById(id).exec();
  }

  async update(_id: Types.ObjectId, userDto: ExerciseDictionaryDto): Promise<ExerciseDictionary> {
    return this.ExerciseModel.updateOne({ _id }, userDto);
  }

  async delete(_id: Types.ObjectId): Promise<object> {
    return this.ExerciseModel.deleteOne({ _id });
  }
}
