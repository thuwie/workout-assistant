import { Test, TestingModule } from '@nestjs/testing';
import { MongodbService } from '../src/services/mongodb.service';

describe('MongodbService', () => {
  let service: MongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongodbService],
    }).compile();

    service = module.get<MongodbService>(MongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
