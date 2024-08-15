import { useState } from "react";
import { ModalProps } from "~/context/Modal.context";

export const useModal = () => {
  const defaultModalProps: ModalProps = {
    title: 'title',
    description: 'description',
    confirm: 'ok',
    onClickConfirm: () => null,
  }

  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps>(defaultModalProps);

  const {
    title,
    description,
    confirm,
    onClickConfirm
  } = modalProps;

  const handleShowModal = (modal: ModalProps) => {
    setOpen(true);
    setModalProps(modal);
  }

  const handleClickConfirm = () => {
    onClickConfirm!();
    setOpen(false);
  }

  const handleHideModal = () => {
    setOpen(false);
  }

  return {
    open,
    title,
    description,
    confirm,
    handleClickConfirm,
    handleHideModal,
    handleShowModal
  }
}
