import { Injectable } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';

@Injectable()
export class WritersService {
  constructor(private prisma: PrismaService) {}

  // Get all writers with their latest post
  async getWritersWithLatestPost() {
    return this.prisma.writers.findMany({
      include: {
        posts: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: {
        posts: {
          _count: 'desc',
        },
      },
    });
  }
  // Get a single writer by ID
  async getWriterById(id: string) {
    return this.prisma.writers.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    });
  }
}
