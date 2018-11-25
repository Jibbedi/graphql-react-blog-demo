import React, { Component } from "react";
import styled from "styled-components";
import PopularArticle from "./PopularArticle";

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

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <SidebarHeader>Popular Posts</SidebarHeader>
        <PopularArticleWrapper>
          <PopularArticle index={1} />
        </PopularArticleWrapper>
        <PopularArticleWrapper>
          <PopularArticle index={2} />
        </PopularArticleWrapper>
        <PopularArticleWrapper>
          <PopularArticle index={3} />
        </PopularArticleWrapper>
      </aside>
    );
  }
}

export default Sidebar;
