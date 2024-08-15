import { createContext } from "react";

export interface LoadingContextProps {
  showLoading: (value: boolean) => void
  loading: boolean
}

const defaultValues: LoadingContextProps = {
  showLoading: () => false,
  loading: false,
}

export const LoadingContext = createContext(defaultValues);