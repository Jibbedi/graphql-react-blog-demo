import { CommentMocks } from '../mocks/Comment.mock';
import { IComment } from '../model/Comment';

export function findCommentById(id: string): IComment {
  return CommentMocks.find(comment => comment.id === id);
}
