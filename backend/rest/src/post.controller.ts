import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import * as database from '../../database/Database';
import { Post } from './model/Post';
import { IPost } from '../../model/Post';

@ApiUseTags("post controller")
@Controller("post")
export class PostController {
  constructor() {}

  @ApiNotFoundResponse({ description: "No post found" })
  @ApiOkResponse({
    description: "The Post with the requested id",
    type: Post
  })
  @Get(":id")
  findPostById(@Param("id") id: string): IPost {
    const post = database.findPostById(id);

    if (!post) {
      throw new HttpException("post not found", 404);
    }

    return post;
  }
}
