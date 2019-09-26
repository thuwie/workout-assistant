import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  private readonly healh = 'healthy';

  getHealth(): string {
    return this.healh;
  }
}
