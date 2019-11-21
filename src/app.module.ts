import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { TrainingModule } from './training/training.module';
import { PresetModule } from './preset/preset.module';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [HealthModule, AuthModule, UserModule, TrainingModule, ExerciseModule, MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: `${config.get('MONGO_URL')}/${config.get('MONGO_DB')}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  }), PresetModule],
  providers: [ConfigService],
})
export class AppModule {
}
