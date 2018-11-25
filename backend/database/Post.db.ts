import { PostMocks } from '../mocks/Posts.mock';
import { IPost } from '../model/Post';

export function findPostById(id: string): IPost {
  return PostMocks.find(post => post.id === id);
}
