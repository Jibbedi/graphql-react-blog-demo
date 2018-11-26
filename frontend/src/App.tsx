import React, { Component } from 'react';
import GlobalStyles from './ui/Global';
import Header from './components/Header';
import styled, { ThemeProvider } from 'styled-components';
import theme from './ui/Theme';
import Sidebar from './components/Sidebar';
import ArticleOverview from './components/ArticleOverview';
import { enhancePostWithCommentsAndAuthorData, requestAllPosts } from './helpers/loader';
import { Post } from './model/Post';

export interface AppState {
  spotlight?: Post[];
  recentPosts?: Post[];
  popularPosts?: Post[];
  loading: boolean;
}

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: ${props => props.theme.bodyTextColor};
  line-height: ${props => props.theme.lineHeight};
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
`;

const MainWrapper = styled.div`
  grid-area: main;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas: "main sidebar";
  grid-gap: 80px;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 980px) {
    grid-template-areas: "main main";

    ${SidebarWrapper} {
      display: none;
    }
  }
`;

class App extends Component<any, AppState> {
  state: AppState = {
    loading: true,
    recentPosts: [],
    spotlight: [],
    popularPosts: []
  };

  async componentDidMount(): Promise<void> {
    const spotlight = requestAllPosts({ onlySpotlight: true }).then(
      (posts: Post[]) => this.setState({ spotlight: posts })
    );

    const recentPosts = requestAllPosts({ onlySpotlight: false }).then(
      (posts: Post[]) => {
        return Promise.all(
          posts.map((post: Post) => enhancePostWithCommentsAndAuthorData(post))
        ).then(enhancedPosts => {
          this.setState({ recentPosts: enhancedPosts });
        });
      }
    );

    const popularPosts = requestAllPosts({ onlySpotlight: true }).then(
      (posts: Post[]) => this.setState({ popularPosts: posts })
    );

    await Promise.all([spotlight, recentPosts, popularPosts]);

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <GlobalStyles />
          <Header />
          <ContentWrapper>
            <MainWrapper>
              <ArticleOverview
                spotlight={this.state.spotlight}
                recentPosts={this.state.recentPosts}
              />
            </MainWrapper>
            <SidebarWrapper>
              <Sidebar popularPosts={this.state.popularPosts} />
            </SidebarWrapper>
          </ContentWrapper>
        </LayoutWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
