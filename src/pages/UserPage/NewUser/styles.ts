import styled from "styled-components";
import { Form as FormComponent } from '~/components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  width: 500px;
  border-width: 2px;
  border-color: #f0f0f0;
  border-style: solid;
  padding: 48px;
`;

export const Form = styled(FormComponent)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-content: center;

  button[type='submit'] {
    align-self: end;
  }
`
