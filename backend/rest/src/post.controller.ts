import { Controller, Get, HttpException, Optional, Param, Query } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import * as database from '../../database/Database';
import { Post } from './model/Post';
import { POST_ENDPOINT } from './config/endpoint';
import { POST_CONTROLLER } from './config/api-tags';
import { Comment } from './model/Comment';
import { PostConverter } from './converter/post.converter';
import { CommentConverter } from './converter/comment.converter';

@ApiUseTags(POST_CONTROLLER)
@Controller(POST_ENDPOINT)
export class PostController {
  constructor() {}

  @ApiNotFoundResponse({ description: "No post found" })
  @ApiOkResponse({
    description: "The Post with the requested id",
    type: Post
  })
  @Get(":id")
  findPostById(@Param("id") id: string): Post {
    const databasePost = database.findPostById(id);

    if (!databasePost) {
      throw new HttpException("post not found", 404);
    }

    return PostConverter.convert(databasePost);
  }

  @ApiOkResponse({
    description: "The comments for a given post",
    type: Post
  })
  @Get(":id/comments")
  findCommentsForPost(@Param("id") id: string): Comment[] {
    const databaseComments = database.findCommentsForPostById(id);

    return databaseComments.map(databaseComment =>
      CommentConverter.convert(databaseComment)
    );
  }

  @ApiOkResponse({
    description: "All posts matching the criteria",
    type: Post
  })
  @Get("/get/all")
  findPosts(
    @Optional() @Query("onlySpotlight") onlyIncludeSpotlight?: string, @Optional() @Query("limit") limit?: number
  ): Post[] {
    const databasePosts = database.findPosts({
      onlyIncludeSpotlight: onlyIncludeSpotlight === "true",
      limit
    });

    return databasePosts.map(post => PostConverter.convert(post));
  }
}
