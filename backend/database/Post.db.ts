import { PostMocks } from '../mocks/Posts.mock';
import { IPost } from '../model/Post';
import { IComment } from '../model/Comment';
import { findCommentById } from './Comment.db';

export interface FindPostsQueryOptions {
  onlyIncludeSpotlight?: boolean;
  sortDescendingByKey?: string;
}

export function findPostById(id: string): IPost {
  return PostMocks.find(post => post.id === id);
}

export function findCommentsForPostById(postId: string): IComment[] {
  const post = findPostById(postId);

  if (!post) return [];

  return post.commentIds.map(commentId => findCommentById(commentId));
}

export function findPosts({
  onlyIncludeSpotlight,
  sortDescendingByKey
}: FindPostsQueryOptions): IPost[] {
  return PostMocks.filter(post => {
    return onlyIncludeSpotlight ? post.isSpotlight : true;
  });
}
