import styled from "styled-components";
import { Form as FormComponent } from '~/components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 64px);

  @media (max-width: 500px) {
    justify-content: start;
  }
`;

export const Card = styled.div`
  width: 460px;
  border-width: 2px;
  border-color: #f0f0f0;
  border-style: solid;

  @media (max-width: 500px) {
    width: 100%;
    border-width: 0;
  }
`;

export const Form = styled(FormComponent)`
  padding: 40px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-content: center;

  button[type='submit'] {
    align-self: end;
  }
`
