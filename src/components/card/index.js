import React from "react";
import styled, { css } from "styled-components";
import Theme from "../../theme";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  /* width: 600px; */
  /* width: 420px; */
  font-family: ${(props) => props.theme.fonts[0]};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  height: fit-content;
  display: block;
`;

export const CardBigWrapper = styled(CardWrapper)`
  width: 600px;
`;
export const CardSmallWrapper = styled(CardWrapper)`
  width: 420px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
`;
export const CardCancelBtn = styled.div`
  /* margin: 0 auto; */
  padding: 10px 20px;
  display: inline;
  float: right;
  margin-top: -15px;
`;
export const CardHeaderContent = styled.header`
  /* padding-top: 10px;
  padding-bottom: 5px; */
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.maroon};
  color: ${({ theme: { colors } }) => colors.white};
  text-align: center;
`;
export const DisplayInline = styled.div`
  display: inline;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: inline;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 8px;
  width: 100%;
  width: -webkit-fill-available;
  font-family: inherit;
  font-size: 14px;
  border: ${(props) => `1px solid ${props.theme.colors.gainsboro}`};
  transition: border-bottom-color 0.25s ease-in;
  border-radius: 4px;
  margin-top: 4px;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardSelectInput = styled.select`
  padding: 8px;
  width: 100%;
  /* font-family: inherit; */
  /* font-size: 14px; */
  border: ${(props) => `1px solid ${props.theme.colors.gainsboro}`};
  transition: border-bottom-color 0.25s ease-in;
  border-radius: 4px;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: ${(props) => props.theme.colors.dimgrey};
  cursor: pointer;
  opacity: 0.25;
  transition: opacity 0.25s ease-in;

  &:hover {
    opacity: 0.95;
  }

  ${(props) =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${(props) =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: larger;
  /* font-size: 14px; */
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.maroon};
  color: ${({ theme: { colors } }) => colors.white};
  border: 0;
  border-radius: 4px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  margin-top: 10px;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border: ${(props) => `1px solid ${props.theme.colors.gainsboro}`};
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const CardLabel = styled.label`
  width: 50%;
  display: inline-block;
  padding-top: 10px;
  font-size: inherit;
`;

export const CardLabelValue = styled.span`
  width: 50%;
  display: inline-block;
`;
export const CardParagraph = styled.div`
  display: flex;
  padding: 3px 0;
  margin-top: 15px;
  justify-content: right;
`;

export const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 10px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.lightgrey}`};
  background-color: ${(props) => props.theme.colors.maroon};
  font-family: ${(props) => props.theme.fonts[0]};
`;

export const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.white};
`;

export const ErrorMessage = styled.span`
  color: ${({ theme: { colors } }) => colors.maroon};
  padding: 4px 0 0;
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
`;
