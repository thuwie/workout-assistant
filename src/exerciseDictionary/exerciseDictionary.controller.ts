import {
  Body, Controller, Delete, Get, Param, Post, Put, Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { ExerciseDictionary } from './interfaces/exerciseDictionary.interface';
import { ExerciseDictionaryDto } from './dto/exerciseDictionary.dto';
import { ExerciseDictionaryService } from './exerciseDictionary.service';


@Controller('exercise/dictionary/')
export class ExerciseDictionaryController {
  constructor(private readonly exerciseService: ExerciseDictionaryService) {
  }

  @Post()
  async create(@Body() exerciseDto: ExerciseDictionaryDto) {
    return this.exerciseService.create(exerciseDto);
  }

  @Get('all')
  async getAll(): Promise<ExerciseDictionary[]> {
    return this.exerciseService.find();
  }

  @Get('search')
  async findAll(@Query() query: any): Promise<ExerciseDictionary[]> {
    console.log(query);
    return this.exerciseService.find(query);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<ExerciseDictionary | null> {
    return this.exerciseService.findById(Types.ObjectId(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() exerciseDto: ExerciseDictionaryDto): Promise<ExerciseDictionary | null> {
    return this.exerciseService.update(Types.ObjectId(id), exerciseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.exerciseService.delete(Types.ObjectId(id));
  }
}
