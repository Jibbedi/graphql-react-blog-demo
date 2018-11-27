import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin-top: 20px;
  margin-bottom: 80px;
`;

const TitleWrapper = styled.div`
  width: max-content;
  text-align: right;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  color: ${props => props.theme.titleTextColor};
`;

const SubTitle = styled.div`
  font-weight: bold;
  color: ${props => props.theme.accentColor};
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <TitleWrapper>
          <Title>My awesome blog!</Title>
          <SubTitle>Powered by GraphQL</SubTitle>
        </TitleWrapper>
      </HeaderContainer>
    );
  }
}

export default Header;
