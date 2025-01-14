// posts.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

// const prisma = new PrismaService();

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(title: string, url: string, writerId: string) {
    return this.prisma.posts.create({
      data: {
        title,
        url,
        writerId,
      },
    });
  }
}
