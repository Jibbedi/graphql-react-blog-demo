import React, { Component } from 'react';
import styled from 'styled-components';
import PopularArticle from './PopularArticle';
import { Post } from '../model/Post';

export interface SidebarProps {
  popularPosts: Post[];
}

const SidebarHeader = styled.h3`
  margin: 0 0 20px 0;
  padding-bottom: 5px;
  font-weight: bold;
  line-height: 1;
  border-bottom: 4px solid ${props => props.theme.accentColor};
  color: ${props => props.theme.titleTextColor};
`;

const PopularArticleWrapper = styled.div`
  margin-bottom: 10px;
`;

class Sidebar extends Component<SidebarProps> {
  render() {
    return (
      <aside>
        <SidebarHeader>Popular Posts</SidebarHeader>
        {this.props.popularPosts.map((post, index: number) => (
          <PopularArticleWrapper>
            <PopularArticle key={post.title} rank={index + 1} article={post} />
          </PopularArticleWrapper>
        ))}
      </aside>
    );
  }
}

export default Sidebar;
