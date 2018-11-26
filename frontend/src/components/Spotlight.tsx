import React, { Component } from 'react';
import styled from 'styled-components';
import { Post } from '../model/Post';

export interface SpotlightProps {
  article: Post;
}

export interface SpotlightWrapperProps {
  backgroundSource: string;
}

const SpotlightWrapper = styled.div<SpotlightWrapperProps>`
  display: grid;
  width: 100%;
  height: 100%;
  background: url("${props => props.backgroundSource}") top left;
  background-size: cover;
  border-bottom: 4px solid ${props => props.theme.accentColor};
  transition: 2s all ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-position-y: -50px;
  } 
  
`;

const SpotlightDetails = styled.div`
  background: rgba(0, 0, 0, 0.6);
  align-self: end;
  justify-self: start;
  margin-bottom: 60px;
  color : ${props => props.theme.contrastTextColor}
  font-weight: bold;
  font-size: 1.5em;
  padding: 20px 10px;
  min-width: 300px;
  `;

class Spotlight extends Component<SpotlightProps> {
  render() {
    const { article } = this.props;

    return (
      <SpotlightWrapper backgroundSource={article.imageUrl}>
        <SpotlightDetails>{article.title}</SpotlightDetails>
      </SpotlightWrapper>
    );
  }
}

export default Spotlight;
