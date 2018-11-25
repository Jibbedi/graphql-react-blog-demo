import React, { Component } from "react";
import styled from "styled-components";
import Link from "../ui/Link";

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

class ArticleSummary extends Component {
  render() {
    return (
      <ArticleSummaryWrapper>
        <div>
          <SummaryImage src="https://source.unsplash.com/random" />
          <CommentSummary>4 Comments</CommentSummary>
        </div>
        <div>
          <SummaryTitle>Post Title</SummaryTitle>
          <SummarySubTitle>
            Posted by <b>Author</b> on <b>September 12 2018</b>
          </SummarySubTitle>
          <SummaryText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </SummaryText>
          <div>
            <Link href="#">Read More</Link>
          </div>
        </div>
      </ArticleSummaryWrapper>
    );
  }
}

export default ArticleSummary;
