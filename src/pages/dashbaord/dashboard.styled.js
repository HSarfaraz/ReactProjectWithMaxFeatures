import styled from "styled-components";
import Theme from "../../theme";

export const BadgeStyle = styled.span`
   {
    color: #fff;
    border-radius: 4px;
    padding: 5px;
    font-weight: 700;
    /* font-size: larger; */
  }
`;
export const FailureBadgeStyle = styled(BadgeStyle)`
  background-color: ${(props) => props.theme.colors.maroon};
`;
export const SuccessBadgeStyle = styled(BadgeStyle)`
  background-color: ${(props) => props.theme.colors.green};
`;

export const CustomTable = styled.table`
  &&& {
    table,
    th,
    td {
      //   border: 1px solid black;
      // border-collapse: collapse;

      padding: 20px;
      /* width: 100%; */
      /* font-family: inherit; */
      font-size: 14px;
      border: ${(props) => `1px solid ${props.theme.colors.gainsboro}`};
      transition: border-bottom-color 0.25s ease-in;
      border-radius: 4px;
      margin: auto;
    }
    th,
    td,
    tr {
      padding: 10px;
    }
    th {
      text-align: left;
      font-weight: 700;
      font-size: larger;
    }
    table {
      width: 100%;
    }
    thead {
      font-family: ${(props) => props.theme.fonts[0]};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
      background-color: ${(props) => props.theme.colors.maroon};
      color: #fff;
      border: none;
      border-radius: 5px;
    }
    tbody {
      font-family: ${(props) => props.theme.fonts[0]};
      border-radius: 5px;
    }
  }
`;

export const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  display: grid;
  margin: 20px auto;
`;
export const HeaderContainer = styled(DashboardContainer)`
  padding: 15px;
  border: 1px solid #eee;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-size: larger;
  height: auto;
`;

export const FilterContainer = styled(HeaderContainer)`
  justify-content: right;
  width: auto;
`;
