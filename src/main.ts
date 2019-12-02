import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './env';
import { loggerMiddleware } from './utils/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(loggerMiddleware);
  await app.listen(`${process.env.SERVER_PORT}`);
}

bootstrap();
