import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import * as database from '../../database/Database';
import { Author } from './model/Author';
import { IAuthor } from '../../model/Author';

@ApiUseTags("author controller")
@Controller("author")
export class AuthorController {
  constructor() {}

  @ApiNotFoundResponse({ description: "No author found" })
  @ApiOkResponse({
    description: "The Author with the requested id",
    type: Author
  })
  @Get(":id")
  findPostById(@Param("id") id: string): IAuthor {
    const author = database.findAuthorById(id);

    if (!author) {
      throw new HttpException("author not found", 404);
    }

    return author;
  }
}
