import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HIDE_SIDEBAR_BREAKPOINT } from "./config/breakpoint";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { isDeviceConnectionFast } from "./helpers/connection";
import GlobalStyles from "./ui/Global";
import Header from "./components/Header";
import theme from "./ui/Theme";
import Sidebar from "./components/Sidebar";
import ArticleOverview from "./components/ArticleOverview";
import { shouldHideSidebar } from "./helpers/size";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000"
});

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

const QUERY = gql`
query GetPosts($requestSpotlight: Boolean!, $requestPopular : Boolean!) {
  spotlight : posts(onlySpotlight: true, limit: 1) @include(if: $requestSpotlight ) {
    title
    imageUrl
  }
  recentPosts: posts(limit: 20) {
    title
    thumbnailUrl
    createTimestamp
    comments {
      id
    }
    author {
      displayName
    }
  }
  popularPosts: posts(sortingKey: views, limit: 5) @include(if: $requestPopular) {
    title
  }
}
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Query query={QUERY}
               variables={{ requestSpotlight: isDeviceConnectionFast(), requestPopular: !shouldHideSidebar() }}>
          {
            ({ loading, data }) => {

              if (loading) return <div>Loading...</div>;


              return <ThemeProvider theme={theme}>
                <LayoutWrapper>
                  <GlobalStyles/>
                  <Header/>
                  <ContentWrapper>
                    <MainWrapper>
                      <ArticleOverview
                        spotlight={data.spotlight}
                        recentPosts={data.recentPosts}
                      />
                    </MainWrapper>
                    <SidebarWrapper>
                      <Sidebar popularPosts={data.popularPosts}/>
                    </SidebarWrapper>
                  </ContentWrapper>
                </LayoutWrapper>
              </ThemeProvider>;
            }
          }
        </Query>

      </ApolloProvider>
    );
  }
}

export default App;
