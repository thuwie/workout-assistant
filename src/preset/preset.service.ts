import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Preset } from './interfaces/preset.interface';
import { PresetDto } from './dto/preset.dto';

@Injectable()
export class PresetService {
  constructor(@InjectModel('Preset') private readonly PresetModel: Model<Preset>) {}

  async create(presetDto: PresetDto): Promise<Preset> {
    const createdPreset = new this.PresetModel(presetDto);
    return createdPreset
      .save();
  }

  async find(query?: Object): Promise<Preset[]> {
    return this.PresetModel
      .find(query)
      .populate('trainings')
      .populate('exercises')
      .exec();
  }

  async findById(id: Types.ObjectId): Promise<Preset | null> {
    return this.PresetModel
      .findById(id)
      .populate('trainings')
      .populate('exercises')
      .exec();
  }

  async update(_id: Types.ObjectId, userDto: PresetDto): Promise<Preset> {
    return this.PresetModel
      .updateOne({ _id }, userDto);
  }

  async delete(_id: Types.ObjectId): Promise<object> {
    return this.PresetModel
      .deleteOne({ _id });
  }
}
