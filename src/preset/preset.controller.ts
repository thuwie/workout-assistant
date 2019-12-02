import {
  Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
import { PresetService } from './preset.service';
import { Preset } from './interfaces/preset.interface';
import { PresetDto } from './dto/preset.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('preset')
export class PresetController {
  constructor(private readonly presetService: PresetService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() presetDto: PresetDto) {
    return this.presetService.create(presetDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async getAll(): Promise<Preset[]> {
    return this.presetService.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async findAll(@Query() query: any): Promise<Preset[]> {
    console.log(query);
    return this.presetService.find(query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async find(@Param('id') id: string): Promise<Preset | null> {
    return this.presetService.findById(Types.ObjectId(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() presetDto: PresetDto): Promise<Preset | null> {
    return this.presetService.update(Types.ObjectId(id), presetDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object> {
    return this.presetService.delete(Types.ObjectId(id));
  }
}
