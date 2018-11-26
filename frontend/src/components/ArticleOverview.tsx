import React, { Component } from 'react';
import ArticleSummary from './ArticleSummary';
import styled from 'styled-components';
import Spotlight from './Spotlight';
import { Post } from '../model/Post';

export interface ArticleOverviewProps {
  spotlight: Post[];
  recentPosts: Post[];
}

const ArticleSummaryWrapper = styled.div`
  margin-bottom: 80px;
`;

const SpotlightWrapper = styled.div`
  height: 400px;
  margin-bottom: 50px;
`;

class ArticleOverview extends Component<ArticleOverviewProps> {
  render() {
    return (
      <main>
        {this.props.spotlight &&
          this.props.spotlight.map(spotlight => (
            <SpotlightWrapper>
              <Spotlight key={spotlight.title} article={spotlight} />
            </SpotlightWrapper>
          ))}

        {this.props.recentPosts.map(post => (
          <ArticleSummaryWrapper>
            <ArticleSummary key={post.title} article={post} />
          </ArticleSummaryWrapper>
        ))}
      </main>
    );
  }
}

export default ArticleOverview;
