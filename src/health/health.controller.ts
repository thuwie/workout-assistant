import { Controller, Get, Req, Request } from '@nestjs/common';
import { HealthService } from './health.service';


@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {
  }

  @Get()
  hello(@Req() req: Request): string {
    console.log(req.body);
    return this.healthService.getHealth();
  }
}
