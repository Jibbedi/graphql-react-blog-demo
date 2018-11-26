import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../ui/Link';
import { Post } from '../model/Post';

export interface ArticleSummaryProps {
  article: Post;
}

const ArticleSummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 30px;
`;

const SummaryImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: top center;
`;

const CommentSummary = styled.div`
  font-size: 0.8em;
  text-align: right;
`;

const SummaryTitle = styled.h3`
  margin: 0;
  font-weight: bold;
  line-height: 1;
  color: ${props => props.theme.titleTextColor};
`;

const SummarySubTitle = styled.div`
  font-size: 0.8em;
`;

const SummaryText = styled.p`
  margin: 10px 0 5px 0;
`;

class ArticleSummary extends Component<ArticleSummaryProps> {
  render() {
    const { article } = this.props;
    return (
      <ArticleSummaryWrapper>
        <div>
          <SummaryImage src={article.thumbnailUrl} />
          <CommentSummary>{article.comments.length} Comments</CommentSummary>
        </div>
        <div>
          <SummaryTitle>{article.title}</SummaryTitle>
          <SummarySubTitle>
            Posted by <b>{article.author.displayName}</b> on{" "}
            <b>{article.createTimestamp}</b>
          </SummarySubTitle>
          <SummaryText>{article.excerpt}</SummaryText>
          <div>
            <Link href="#">Read More</Link>
          </div>
        </div>
      </ArticleSummaryWrapper>
    );
  }
}

export default ArticleSummary;
