import styled from "styled-components";
import Theme from "../../theme";

export const ConductInterviewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  display: grid;
  margin: 20px auto;
`;

export const HeaderContainer = styled(ConductInterviewContainer)`
  padding: 15px;
  border: 1px solid #eee;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-size: larger;
  height: auto;
`;
