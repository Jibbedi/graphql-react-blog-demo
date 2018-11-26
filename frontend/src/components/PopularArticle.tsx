import React from 'react';
import styled from 'styled-components';
import { Post } from '../model/Post';

export interface PopularArticleProps {
  rank: number;
  article: Post;
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

const PopularArticle = ({ rank, article }: PopularArticleProps) => {
  return (
    <PopularArticleWrapper>
      <RankIndicator>{rank}</RankIndicator>
      <div>{article.title}</div>
    </PopularArticleWrapper>
  );
};

export default PopularArticle;
