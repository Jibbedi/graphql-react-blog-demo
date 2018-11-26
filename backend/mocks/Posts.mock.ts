import { IPost } from '../model/Post';

export const PostMocks: IPost[] = [
  {
    title: "Why GraphQL is awesome",
    content: "Lorem Ipsum",
    excerpt: "Loren Ipsum",
    thumbnailUrl: "https://source.unsplash.com/random",
    imageUrl: "https://source.unsplash.com/random",
    authorId: "1",
    isSpotlight: true,
    commentIds: ["1"],
    createTimestamp: 1543168679694,
    id: "1",
    views: 100
  },
  {
    title: "Why GraphQL is awesome!!",
    content: "Lorem Ipsum",
    excerpt: "Loren Ipsum",
    thumbnailUrl: "https://source.unsplash.com/random",
    imageUrl: "https://source.unsplash.com/random",
    authorId: "1",
    isSpotlight: false,
    commentIds: ["1"],
    createTimestamp: 1543168679694,
    id: "1",
    views: 100
  }
];
