import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import * as database from '../../database/Database';
import { Author } from './model/Author';
import { AUTHOR_ENDPOINT } from './config/endpoint';
import { AUTHOR_CONTROLLER } from './config/api-tags';
import { AuthorConverter } from './converter/author.converter';

@ApiUseTags(AUTHOR_CONTROLLER)
@Controller(AUTHOR_ENDPOINT)
export class AuthorController {
  constructor() {}

  @ApiNotFoundResponse({ description: "No author found" })
  @ApiOkResponse({
    description: "The Author with the requested id",
    type: Author
  })
  @Get(":id")
  findAuthorById(@Param("id") id: string): Author {
    const databaseAuthor = database.findAuthorById(id);

    if (!databaseAuthor) {
      throw new HttpException("author not found", 404);
    }

    return AuthorConverter.convert(databaseAuthor);
  }
}
