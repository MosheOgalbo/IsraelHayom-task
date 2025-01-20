import { Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  async createPost(title: string, url: string, writerId: string) {
    return this.postsService.createPost(title, url, writerId);
  }
  // Get post by ID
  @Get(':id')
  async getPost(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }
  @Get()
  async getAllPosts() {
    return this.postsService.getAllPosts();
  }
}
