import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseDictionarySchema } from './schemas/exerciseDictionary.schema';
import { ExerciseDictionaryController } from './exerciseDictionary.controller';
import { ExerciseDictionaryService } from './exerciseDictionary.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ExerciseDictionary', schema: ExerciseDictionarySchema }])],
  controllers: [ExerciseDictionaryController],
  providers: [ExerciseDictionaryService],
})
export class ExerciseDictionaryModule {
}
