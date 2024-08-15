import { ReactNode } from "react";
import { Loading } from "~/components"
import { LoadingContext, LoadingContextProps } from "~/context/Loading.context";
import { useLoading } from "~/hooks";

interface LoadingProviderProps {
  children: ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const { showLoading, setShowLoading } = useLoading();

  const loadingContextProps: LoadingContextProps = {
    showLoading: setShowLoading,
    loading: showLoading,
  }

  return (
    <LoadingContext.Provider value={loadingContextProps}>
      {children}
      {showLoading && <Loading />}
    </LoadingContext.Provider>
  )
}