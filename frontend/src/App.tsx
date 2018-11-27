import React, { Component } from "react";
import GlobalStyles from "./ui/Global";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "./ui/Theme";
import Sidebar from "./components/Sidebar";
import ArticleOverview from "./components/ArticleOverview";
import { enhancePostWithCommentsAndAuthorData, requestAllPosts } from "./helpers/loader";
import { Post } from "./model/Post";
import { isDeviceConnectionFast } from "./helpers/connection";
import { HIDE_SIDEBAR_BREAKPOINT } from "./config/breakpoint";
import { shouldHideSidebar } from "./helpers/size";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000"
});

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

  @media (max-width: ${HIDE_SIDEBAR_BREAKPOINT}px) {
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
    const spotlight = isDeviceConnectionFast()
      ? requestAllPosts({ onlySpotlight: true }).then((posts: Post[]) =>
        this.setState({ spotlight: posts })
      )
      : null;


    const recentPosts = requestAllPosts({
      onlySpotlight: false,
      limit: 20
    }).then(
      (posts: Post[]) => {
        return Promise.all(
          posts.map((post: Post) => enhancePostWithCommentsAndAuthorData(post))
        ).then(enhancedPosts => {
          this.setState({ recentPosts: enhancedPosts });
        });
      }
    );


    const popularPosts = !shouldHideSidebar() ? requestAllPosts({ sortDescendingByKey: "views", limit: 5 }).then(
      (posts: Post[]) => this.setState({ popularPosts: posts })
    ) : null;

    await Promise.all([spotlight, recentPosts, popularPosts]);

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <LayoutWrapper>
            <GlobalStyles/>
            <Header/>
            <ContentWrapper>
              <MainWrapper>
                <ArticleOverview
                  spotlight={this.state.spotlight}
                  recentPosts={this.state.recentPosts}
                />
              </MainWrapper>
              <SidebarWrapper>
                <Sidebar popularPosts={this.state.popularPosts}/>
              </SidebarWrapper>
            </ContentWrapper>
          </LayoutWrapper>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
