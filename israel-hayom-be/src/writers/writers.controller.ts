import { Controller, Get } from '@nestjs/common';
import { WritersService } from './writers.service';

@Controller('writers')
export class WritersController {
  constructor(private readonly writersService: WritersService) {}

  @Get()
  async getWriters() {
    return this.writersService.getWritersWithLatestPost();
  }
}
