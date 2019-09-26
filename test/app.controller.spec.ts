/* eslint-env jest */
import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from '../src/hello/app.controller';
import { HelloService } from '../src/hello/app.service';

describe('AppController', () => {
  let appController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    appController = app.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
