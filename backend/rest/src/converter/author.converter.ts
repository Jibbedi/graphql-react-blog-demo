import { HatoasLink } from '../model/HatoasLink';
import { COMMENT_ENDPOINT, ENDPOINT } from '../config/endpoint';
import { IAuthor } from '../../../model/Author';
import { Author } from '../model/Author';

export class AuthorConverter {
  static convert(fromDatabaseAuthor: IAuthor): Author {
    const self = new HatoasLink(
      "self",
      `${ENDPOINT}${COMMENT_ENDPOINT}/${fromDatabaseAuthor.id}`
    );

    const {
      id,
      avatarUrl,
      joinedTimestamp,
      lastName,
      firstName,
      displayName,
      email
    } = fromDatabaseAuthor;

    return {
      id,
      avatarUrl,
      joinedTimestamp,
      lastName,
      firstName,
      displayName,
      email,
      links: [self]
    };
  }
}
