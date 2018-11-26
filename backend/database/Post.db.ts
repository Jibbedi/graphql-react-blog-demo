import { PostMocks } from '../mocks/Posts.mock';
import { IPost } from '../model/Post';
import { IComment } from '../model/Comment';
import { findCommentById } from './Comment.db';

export interface FindPostsQueryOptions {
  onlyIncludeSpotlight?: boolean;
  sortDescendingByKey?: string;
  limit?: number;
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
  sortDescendingByKey,
  limit
}: FindPostsQueryOptions): IPost[] {
  return PostMocks.filter(post =>
    onlyIncludeSpotlight ? post.isSpotlight : true
  ).slice(0, limit ? limit : undefined);
}
