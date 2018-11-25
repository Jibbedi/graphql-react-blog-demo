import { IComment } from '../model/Comment';

export const CommentMocks: IComment[] = [
  {
    id: "1",
    title: "What an awesome blog!",
    content: "I love it!",
    createTimestamp: 1543168679694,
    authorId: "1",
    likes: 100,
    responseCommentIds: ["2"]
  },
  {
    id: "2",
    title: "Indeed",
    content: "I love it, too!",
    createTimestamp: 1545168699694,
    authorId: "1",
    likes: 10,
    responseCommentIds: []
  }
];
