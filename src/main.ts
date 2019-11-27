import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import './env';
import { loggerMiddleware } from './utils/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Awesome workout assistant')
    .setDescription('The awesome workout assistant API description')
    .setVersion('1.0')
    .addTag('pushen')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swag', app, document);

  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(loggerMiddleware);
  await app.listen(`${process.env.SERVER_PORT}`);
}

bootstrap();
