import {
  Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
import { TrainingService } from './training.service';
import { Training } from './interfaces/training.interface';
import { TrainingDto } from './dto/training.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() trainingDto: TrainingDto) {
    this.trainingService.create(trainingDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async getAll(): Promise<Training[]> {
    return this.trainingService.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async findAll(@Query() query: any): Promise<Training[]> {
    console.log(query);
    return this.trainingService.find(query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async find(@Param('id') id: string): Promise<Training | null> {
    return this.trainingService.findById(Types.ObjectId(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() trainingDto: TrainingDto): Promise<Training | null> {
    return this.trainingService.update(Types.ObjectId(id), trainingDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.trainingService.delete(Types.ObjectId(id));
  }
}
