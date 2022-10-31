import styled from "styled-components";
//import Theme from "../../theme";

export const FooterContainer = styled.div`
  position: fixed;
  height: 70px;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.maroon};
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${(props) => props.theme.colors.white};
  padding-top: 30px;
  display: table-cell;
  vertical-align: middle;
  font-weight: 700;
  font-size: larger;
`;
