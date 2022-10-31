import styled from "styled-components";

// import "./styles.css";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;