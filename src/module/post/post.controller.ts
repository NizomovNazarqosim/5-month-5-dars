import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { Post as PostsSchema } from '@prisma/client';
import { createPostDto, UpdateDto } from './dto/create.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get('get')
  getAllPosts(): Promise<PostsSchema[]> {
    return this.postService.getAllPosts();
  }

  @Post('create')
  createPost(@Body() body: createPostDto) {
    this.postService.addPost(body);
  }

  @Put('update/:id')
  updatePost(@Body() body: UpdateDto, @Param('id') id: string | number): any {
    this.postService.updatePost(body, Number(id));
  }
}
