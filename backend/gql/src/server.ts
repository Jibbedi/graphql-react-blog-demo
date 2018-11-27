import { ApolloServer, gql } from "apollo-server";
import { findPosts } from "../../database/Post.db";
import { IPost } from "../../model/Post";
import { findAuthorById } from "../../database/Author.db";
import { IComment } from "../../model/Comment";
import { findCommentById } from "../../database/Comment.db";

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
 
 type Post {
    id: ID!
    title : String!
    thumbnailUrl: String!
    imageUrl: String!
    content: String!
    excerpt: String!
    author: Author!
    createTimestamp: String!
    views: Int!
    comments: [Comment]!
    isSpotlight: Boolean!
 }
 
 type Author {
  id: ID!
  displayName: String!
  firstName:String!
  lastName: String!
  email: String!
  joinedTimestamp: Int!
  avatarUrl: String!
}

type Comment {
  id: ID!
  author: Author!
  title: String!
  content: String!
  responses: [Comment]!
  likes: Int!
  createTimestamp: String!
}


enum SortingKey {
  views
  createTimestamp
}
 
 type Query {
  posts(onlySpotlight: Boolean, sortingKey: SortingKey, limit : Int): [Post]!
 }
`;

export interface PostArguments {
  onlySpotlight?: boolean;
  sortingKey: string;
  limit: number;
}

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    posts: (parent, args: PostArguments, info, context) => findPosts({
      limit: args.limit,
      sortDescendingByKey: args.sortingKey,
      onlySpotlight: args.onlySpotlight
    })
  },
  Post: {
    author: (post: IPost) => findAuthorById(post.authorId),
    comments:
      (post: IPost) => post.commentIds.map(commentId => findCommentById(commentId))
  },
  Comment: {
    author: (comment: IComment) => findAuthorById(comment.authorId),
    responses: (comment: IComment) => comment.responseCommentIds.map(commentId => findCommentById(commentId))
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});