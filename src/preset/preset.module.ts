import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PresetSchema } from './schemas/preset.schema';
import { PresetController } from './preset.controller';
import { PresetService } from './preset.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Preset', schema: PresetSchema }])],
  controllers: [PresetController],
  providers: [PresetService],
})
export class PresetModule {
}
