export interface IPost {
  id: string;
  title: string;
  thumbnailUrl: string;
  imageUrl: string;
  content: string;
  excerpt: string;
  commentIds: string[];
  authorId: string;
  createTimestamp: number;
  views: number;
  isSpotlight: boolean;
}
