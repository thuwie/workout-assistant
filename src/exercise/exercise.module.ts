import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseSchema } from './schemas/exercise.schema';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Exercise', schema: ExerciseSchema }])],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {
}
