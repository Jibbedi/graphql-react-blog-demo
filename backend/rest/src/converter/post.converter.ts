import { IPost } from '../../../model/Post';
import { Post } from '../model/Post';
import { HatoasLink } from '../model/HatoasLink';
import { AUTHOR_ENDPOINT, ENDPOINT, POST_ENDPOINT } from '../config/endpoint';

export class PostConverter {
  static convert(fromDatabasePost: IPost): Post {
    const self = new HatoasLink(
      "self",
      `${ENDPOINT}${POST_ENDPOINT}/${fromDatabasePost.id}`
    );

    const comments = new HatoasLink(
      "comments",
      `${ENDPOINT}${POST_ENDPOINT}/${fromDatabasePost.id}/comments`
    );

    const author = new HatoasLink(
      "author",
      `${ENDPOINT}${AUTHOR_ENDPOINT}/${fromDatabasePost.authorId}`
    );

    const {
      id,
      content,
      createTimestamp,
      excerpt,
      imageUrl,
      isSpotlight,
      thumbnailUrl,
      title,
      views
    } = fromDatabasePost;

    return {
      id,
      content,
      createTimestamp,
      excerpt,
      imageUrl,
      isSpotlight,
      thumbnailUrl,
      title,
      views,
      links: [self, comments, author]
    };
  }
}
