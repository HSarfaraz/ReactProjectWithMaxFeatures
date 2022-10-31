import styled from "styled-components";

// $primary-color:#FE414D;
// $white-color:#FFFFFF;
export const Button = styled.button`
  background: ${props => props.inverted ? "#FE414D" : "white"};
  color: ${props => props.inverted ? "white" : "#FE414D"};
  border: 2px solid #FE414D;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
