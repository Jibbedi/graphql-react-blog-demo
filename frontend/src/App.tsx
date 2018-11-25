import React, { Component } from "react";
import GlobalStyles from "./ui/Global";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "./ui/Theme";
import Sidebar from "./components/Sidebar";
import ArticleOverview from "./components/ArticleOverview";
import { isDeviceConnectionFast } from "./helpers/connection";

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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <GlobalStyles />
          <Header />
          <ContentWrapper>
            <MainWrapper>
              <ArticleOverview showSpotlight={isDeviceConnectionFast()} />
            </MainWrapper>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
          </ContentWrapper>
        </LayoutWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
