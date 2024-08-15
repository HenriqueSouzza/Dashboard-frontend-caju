import { DialogHTMLAttributes } from "react";
import * as S from './Modal.styles';
import { Button } from "~/components/Inputs";

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  title: string
  description?: string
  confirmLabel?: string
  hideLabel?: string
  onClickConfirm: () => void
  onClickHide: () => void
}

export const Modal = ({
  open,
  title,
  description,
  confirmLabel,
  hideLabel,
  onClickConfirm,
  onClickHide,
  ...props
}: ModalProps) => open ? (
  <S.Background>
    <S.Modal open {...props}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      {(confirmLabel || hideLabel) && (
        <S.ButtonWrapper>
          {confirmLabel && (
            <Button onClick={onClickConfirm}>{confirmLabel}</Button>
          )}
          {hideLabel && (
            <Button $variant="nobody" onClick={onClickHide}>{hideLabel}</Button>
          )}
        </S.ButtonWrapper>
      )}
    </S.Modal>
  </S.Background>
) : null;
