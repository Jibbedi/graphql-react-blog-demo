import { Author } from './Author';
import { HatoasLink } from '../../../backend/rest/src/model/HatoasLink';

export interface Post {
  id: string;
  title: string;
  thumbnailUrl: string;
  imageUrl: string;
  content: string;
  excerpt: string;
  comments?: Comment;
  author?: Author;
  createTimestamp: number;
  views: number;
  isSpotlight: boolean;
  links: HatoasLink[];
}
