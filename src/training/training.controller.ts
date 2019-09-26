import {
  Body, Controller, Delete, Get, Param, Post, Put, Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { TrainingService } from './training.service';
import { Training } from './interfaces/training.interface';
import { TrainingDto } from './dto/training.dto';


@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {
  }

  @Post()
  async create(@Body() trainingDto: TrainingDto) {
    this.trainingService.create(trainingDto);
  }

  @Get('all')
  async getAll(): Promise<Training[]> {
    return this.trainingService.find();
  }

  @Get('search')
  async findAll(@Query() query: any): Promise<Training[]> {
    console.log(query);
    return this.trainingService.find(query);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Training | null> {
    return this.trainingService.findById(Types.ObjectId(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() trainingDto: TrainingDto): Promise<Training | null> {
    return this.trainingService.update(Types.ObjectId(id), trainingDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.trainingService.delete(Types.ObjectId(id));
  }
}
