import React from "react";
import styled from "styled-components";

export interface PopularArticleProps {
  index: number;
}

const PopularArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`;

const RankIndicator = styled.div`
  border-radius: 50%;
  color: ${props => props.theme.contrastTextColor};
  background: ${props => props.theme.accentColor};
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  font-weight: bold;
  margin-right: 10px;
`;

const PopularArticle = ({ index }: PopularArticleProps) => {
  return (
    <PopularArticleWrapper>
      <RankIndicator>{index}</RankIndicator>
      <div>Popular Post Title</div>
    </PopularArticleWrapper>
  );
};

export default PopularArticle;
