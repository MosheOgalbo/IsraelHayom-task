import { Module } from '@nestjs/common';
import { WritersService } from './writers.service';
import { WritersController } from './writers.controller';
import { PrismaService } from 'src/Prisma/prisma.service';

@Module({
  providers: [WritersService, PrismaService],
  controllers: [WritersController],
})
export class WritersModule {}
