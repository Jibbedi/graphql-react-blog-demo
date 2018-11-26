import { POST_GET_ALL_ENDPOINT } from '../config/endpoint';
import { Post } from '../model/Post';
import { HatoasLink } from '../model/HatoasLink';

export interface RequestAllPostsOptions {
  onlySpotlight?: boolean;
  limit?: number;
}

export async function requestAllPosts({
  onlySpotlight,
  limit
}: RequestAllPostsOptions): Promise<Post[]> {
  const url = new URL(POST_GET_ALL_ENDPOINT);

  if (onlySpotlight) {
    url.searchParams.append("onlySpotlight", String(onlySpotlight));
  }

  if (limit) {
    url.searchParams.append("limit", String(limit));
  }

  const response = await fetch(url.href, {});
  return response.json();
}

export async function enhancePostWithCommentsAndAuthorData(post: Post) {
  const commentsLink = post.links.find(
    (link: HatoasLink) => link.rel === "comments"
  ).href;
  const authorLink = post.links.find(
    (link: HatoasLink) => link.rel === "author"
  ).href;

  const [comments, author] = await Promise.all([
    fetch(commentsLink).then(response => response.json()),
    fetch(authorLink).then(response => response.json())
  ]);

  post.comments = comments;
  post.author = author;

  return post;
}
