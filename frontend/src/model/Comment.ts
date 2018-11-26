export interface Comment {
  id: string;
  authorId: string;
  title: string;
  content: string;
  responseCommentIds: string[];
  likes: number;
  createTimestamp: number;
}
