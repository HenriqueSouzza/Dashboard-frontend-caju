import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  padding: 4px 32px;
  background-color: #64a98c;
  cursor: pointer;
  height: 40px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;

  &:disabled {
    background-color: gray;
  }

  ${({ size, }) => size === 'sm' && css`
    font-size: 12px;
    border-radius: 4px;
    padding: 4px 16px;
    height: auto;
  `}

  ${({ $bgcolor, color }) => css`
    background-color: ${$bgcolor};
    color: ${color};
  `}

  ${({ $onlyicon }) => $onlyicon && css`
    border-width: 2px;
    border-style: solid;
    border-color: #64a98c;
    width: fit-content;
    padding: 4px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    height: auto;
    svg {
      color: #64a98c;
    }
  `}

  ${({ $variant }) => $variant === 'nobody' && css`
    background: none;
    color: #000;
    box-shadow: none;
  `}
`;
