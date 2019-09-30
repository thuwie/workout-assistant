import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Exercise } from './interfaces/exercise.interface';
import { ExerciseDto } from './dto/exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(@InjectModel('Exercise') private readonly ExerciseModel: Model<Exercise>) {}

  async create(exerciseDto: ExerciseDto): Promise<Exercise> {
    const createdExercise = new this.ExerciseModel(exerciseDto);
    return createdExercise.save();
  }

  async find(query?: Object): Promise<Exercise[]> {
    return this.ExerciseModel.find(query).exec();
  }

  async findById(id: Types.ObjectId): Promise<Exercise | null> {
    return this.ExerciseModel.findById(id).exec();
  }

  async update(_id: Types.ObjectId, userDto: ExerciseDto): Promise<Exercise> {
    return this.ExerciseModel.updateOne({ _id }, userDto);
  }

  async delete(_id: Types.ObjectId): Promise<object> {
    return this.ExerciseModel.deleteOne({ _id });
  }
}
