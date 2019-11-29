import {
  Body, Controller, Delete, Get, Param, Post, Put, Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Exercise } from './interfaces/exercise.interface';
import { ExerciseDto } from './dto/exercise.dto';
import { ExerciseService } from './exercise.service';


@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {
  }

  @Post()
  async create(@Body() exerciseDto: ExerciseDto) {
    return this.exerciseService.create(exerciseDto);
  }

  @Get('all')
  async getAll(): Promise<Exercise[]> {
    return this.exerciseService.find();
  }

  @Get('search')
  async findAll(@Query() query: any): Promise<Exercise[]> {
    console.log(query);
    return this.exerciseService.find(query);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Exercise | null> {
    return this.exerciseService.findById(Types.ObjectId(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() exerciseDto: ExerciseDto): Promise<Exercise | null> {
    return this.exerciseService.update(Types.ObjectId(id), exerciseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.exerciseService.delete(Types.ObjectId(id));
  }
}
