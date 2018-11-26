import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import * as database from '../../database/Database';
import { Comment } from './model/Comment';
import { COMMENT_CONTROLLER } from './config/api-tags';
import { COMMENT_ENDPOINT } from './config/endpoint';
import { CommentConverter } from './converter/comment.converter';

@ApiUseTags(COMMENT_CONTROLLER)
@Controller(COMMENT_ENDPOINT)
export class CommentController {
  constructor() {}

  @ApiNotFoundResponse({ description: "No comment found" })
  @ApiOkResponse({
    description: "The comment with the requested id",
    type: Comment
  })
  @Get(":id")
  findCommentById(@Param("id") id: string): Comment {
    const databaseComment = database.findCommentById(id);

    if (!databaseComment) {
      throw new HttpException("comment not found", 404);
    }

    return CommentConverter.convert(databaseComment);
  }

  @ApiNotFoundResponse({ description: "No comment found" })
  @ApiOkResponse({
    description: "The response comments for comment with given id"
  })
  @Get(":id/responses")
  findResponsesById(@Param("id") id: string): Comment[] {
    const comment = database.findCommentById(id);

    if (!comment) {
      throw new HttpException("comment not found", 404);
    }

    return comment.responseCommentIds.map(commentId =>
      this.findCommentById(commentId)
    );
  }
}
