// posts.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

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
// Get a post by ID
async getPostById(id: string) {
    return this.prisma.posts.findUnique({
      where: { id },
    });
  }
}
