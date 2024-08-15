import { ReactNode } from "react";
import { Modal } from "~/components"
import { ModalContext, ModalContextProps } from "~/context/Modal.context";
import { useModal } from "~/hooks";

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const {
    open,
    title,
    description,
    confirm,
    handleClickConfirm,
    handleHideModal,
    handleShowModal,
  } = useModal();

  const modalContextProps: ModalContextProps = {
    showModal: handleShowModal,
    hideModal: handleHideModal
  }

  return (
    <ModalContext.Provider value={modalContextProps}>
      {children}
      <Modal
        open={open}
        title={title}
        description={description}
        confirmLabel={confirm}
        hideLabel="Fechar"
        onClickConfirm={handleClickConfirm}
        onClickHide={handleHideModal}
      />
    </ModalContext.Provider>
  )
}