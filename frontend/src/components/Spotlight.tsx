import React, { Component } from "react";
import styled from "styled-components";

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

class Spotlight extends Component {
  render() {
    return (
      <SpotlightWrapper
        backgroundSource={
          "https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-0.3.5&s=7747490b36647e2becd1d3b9cd3581a1&auto=format&fit=crop&w=1650&q=80"
        }
      >
        <SpotlightDetails>Post in the spotlight!</SpotlightDetails>
      </SpotlightWrapper>
    );
  }
}

export default Spotlight;
