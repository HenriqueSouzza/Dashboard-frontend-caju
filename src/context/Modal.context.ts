import { createContext } from "react";

export interface ModalProps {
  title: string
  description: string
  confirm?: string
  onClickConfirm?: () => void
}

export interface ModalContextProps {
  showModal: (value: ModalProps) => void
  hideModal: () => void
}

const defaultValues: ModalContextProps = {
  showModal: () => true,
  hideModal: () => false
}

export const ModalContext = createContext(defaultValues);