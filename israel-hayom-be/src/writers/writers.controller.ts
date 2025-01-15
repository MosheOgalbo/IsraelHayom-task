import { Controller, Get, Param } from '@nestjs/common';
import { WritersService } from './writers.service';

@Controller('writers')
export class WritersController {
  constructor(private readonly writersService: WritersService) {}

  // Get all writers with their latest post
  @Get()
  async getWriters() {
    return this.writersService.getWritersWithLatestPost();
  }
  // Get a writer by ID
  @Get(':id')
  async getWriter(@Param('id') id: string) {
    return this.writersService.getWriterById(id);
  }
}
