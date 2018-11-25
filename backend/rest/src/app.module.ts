import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { AuthorController } from './author.controller';
import { CommentController } from './comment.controller';

@Module({
  imports: [],
  controllers: [PostController, AuthorController, CommentController]
})
export class AppModule {}
