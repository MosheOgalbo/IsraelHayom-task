import { Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  async createPost(title: string, url: string, writerId: string) {
    return this.postsService.createPost(title, url, writerId);
  }
}
