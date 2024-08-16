import styled from "styled-components";
import { StatusColumns } from "~/types";

const registrationStatusStyles: {
  [key in string]: { background: string; title: string };
} = {
  [StatusColumns.REVIEW]: {
    background: "#FDF8E9",
    title: "#EFC24D",
  },
  [StatusColumns.APPROVED]: {
    background: "#EEEEFD",
    title: "#4242DF",
  },
  [StatusColumns.REPROVED]: {
    background: "#FBEDF6",
    title: "#CE2893",
  },
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Column = styled.div<{ $status: StatusColumns }>`
  background-color: ${({ $status }) => registrationStatusStyles[$status].background};
  border-radius: 32px;
  height: 80vh;
  flex-basis: calc(33% - 24px);

  @media (max-width: 1080px) {
    flex-basis: 100%;
  }
`;

export const TitleColumn = styled.h3<{ $status: StatusColumns }>`
  margin: 0px;
  color: ${({ $status }) => registrationStatusStyles[$status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
