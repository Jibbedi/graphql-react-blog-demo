import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import * as database from '../../database/Database';
import { IComment } from '../../model/Comment';
import { Comment } from './model/Comment';

@ApiUseTags("comment controller")
@Controller("comment")
export class CommentController {
  constructor() {}

  @ApiNotFoundResponse({ description: "No comment found" })
  @ApiOkResponse({
    description: "The comment with the requested id",
    type: Comment
  })
  @Get(":id")
  findPostById(@Param("id") id: string): IComment {
    const comment = database.findCommentById(id);

    if (!comment) {
      throw new HttpException("comment not found", 404);
    }

    return comment;
  }
}
