import {PostMocks} from '../mocks/Posts.mock';
import {IPost} from '../model/Post';
import {IComment} from '../model/Comment';
import {findCommentById} from './Comment.db';

export interface FindPostsQueryOptions {
    onlySpotlight?: boolean;
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
                              onlySpotlight,
                              sortDescendingByKey,
                              limit
                          }: FindPostsQueryOptions): IPost[] {
    return PostMocks.filter(post =>
        onlySpotlight ? post.isSpotlight : true
    ).sort((firstPost, secondPost) => {
        const sortKey = sortDescendingByKey || 'createTimestamp';
        const firstValueLarger = firstPost[sortKey] > secondPost[sortKey];
        return firstValueLarger ? -1 : firstPost[sortKey] === secondPost[sortKey] ? 0 : 1;
    })
        .slice(0, limit);
}
