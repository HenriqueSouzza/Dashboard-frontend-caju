import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  position: absolute;
  background-color: rgba(0,0,0,.3);
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.dialog`
  background: #fff;
  max-width: 460px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
`;

export const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;