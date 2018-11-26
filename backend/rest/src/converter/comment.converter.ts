import { Comment } from '../model/Comment';
import { HatoasLink } from '../model/HatoasLink';
import { AUTHOR_ENDPOINT, COMMENT_ENDPOINT, ENDPOINT } from '../config/endpoint';
import { IComment } from '../../../model/Comment';

export class CommentConverter {
  static convert(fromDatabaseComment: IComment): Comment {
    const self = new HatoasLink(
      "self",
      `${ENDPOINT}${COMMENT_ENDPOINT}/${fromDatabaseComment.id}`
    );

    const responses = new HatoasLink(
      "responses",
      `${ENDPOINT}${COMMENT_ENDPOINT}/${fromDatabaseComment.id}/responses`
    );

    const author = new HatoasLink(
      "author",
      `${ENDPOINT}${AUTHOR_ENDPOINT}/${fromDatabaseComment.authorId}`
    );

    const { id, content, createTimestamp, likes, title } = fromDatabaseComment;

    return {
      id,
      content,
      createTimestamp,
      title,
      likes,
      links: [self, responses, author]
    };
  }
}
