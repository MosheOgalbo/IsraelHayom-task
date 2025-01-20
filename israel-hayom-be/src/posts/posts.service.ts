// posts.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';

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
  async getAllPosts() {
    return this.prisma.posts.findMany();
  }
}
