import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class WritersService {
  constructor(private prisma: PrismaService) {}

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
}
