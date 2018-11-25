import { AuthorMocks } from '../mocks/Author.mock';
import { IAuthor } from '../model/Author';

export function findAuthorById(id: string): IAuthor {
  return AuthorMocks.find(author => author.id === id);
}
