import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { MongodbService } from './services/mongodb.service';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [HealthModule, AuthModule, MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: `${config.get('MONGO_URL')}/${config.get('MONGO_DB')})`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  })],
  providers: [MongodbService, ConfigService],
})
export class AppModule {
}
