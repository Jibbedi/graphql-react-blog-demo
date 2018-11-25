import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.titleTextColor}
  border-bottom: 4px solid ${props => props.theme.accentColor};
`;

export default Link;
