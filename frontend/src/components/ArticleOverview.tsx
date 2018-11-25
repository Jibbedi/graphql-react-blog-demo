import React, { Component } from "react";
import ArticleSummary from "./ArticleSummary";
import styled from "styled-components";
import Spotlight from "./Spotlight";

export interface ArticleOverviewProps {
  showSpotlight: boolean;
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
        {this.props.showSpotlight && (
          <SpotlightWrapper>
            <Spotlight />
          </SpotlightWrapper>
        )}
        <ArticleSummaryWrapper>
          <ArticleSummary />
        </ArticleSummaryWrapper>

        <ArticleSummaryWrapper>
          <ArticleSummary />
        </ArticleSummaryWrapper>

        <ArticleSummaryWrapper>
          <ArticleSummary />
        </ArticleSummaryWrapper>
      </main>
    );
  }
}

export default ArticleOverview;
