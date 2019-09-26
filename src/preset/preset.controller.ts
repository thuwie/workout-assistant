import {
  Body, Controller, Delete, Get, Param, Post, Put, Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { PresetService } from './preset.service';
import { Preset } from './interfaces/preset.interface';
import { PresetDto } from './dto/preset.dto';


@Controller('preset')
export class PresetController {
  constructor(private readonly presetService: PresetService) {
  }

  @Post()
  async create(@Body() presetDto: PresetDto) {
    this.presetService.create(presetDto);
  }

  @Get('all')
  async getAll(): Promise<Preset[]> {
    return this.presetService.find();
  }

  @Get('search')
  async findAll(@Query() query: any): Promise<Preset[]> {
    console.log(query);
    return this.presetService.find(query);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Preset | null> {
    return this.presetService.findById(Types.ObjectId(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() presetDto: PresetDto): Promise<Preset | null> {
    return this.presetService.update(Types.ObjectId(id), presetDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.presetService.delete(Types.ObjectId(id));
  }
}
