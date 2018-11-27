import React, {Component} from 'react';
import GlobalStyles from './ui/Global';
import Header from './components/Header';
import styled, {ThemeProvider} from 'styled-components';
import theme from './ui/Theme';
import Sidebar from './components/Sidebar';
import ArticleOverview from './components/ArticleOverview';
import {Post} from './model/Post';
import {HIDE_SIDEBAR_BREAKPOINT} from './config/breakpoint';

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

        // use the helper method requestAllPosts from ./helpers/loader.ts


        // 1. grab spotlight post only if device connection is fast enough (use helper method from ./helpers/connection.ts)
        // setState to spotlight


        // 2. grab latest 20 post, enhance them with author and comment information
        // setState to recentPosts


        // 3. grab top 5 posts if sidebar is visible (use helper method from ./helpers/size.ts)
        // sortBy views
        // setState to popularPosts

        // 4. set loading state to false when all requests have returned
        // Promise.all is your friend. It takes an array of promises and resolves, when all have requests have finished


        //this.setState({loading: false});
    }

    render() {
        if (this.state.loading) return <div>Loading...</div>;

        return (
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
        );
    }
}

export default App;
