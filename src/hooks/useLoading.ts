import { useState } from "react";

export const useLoading = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);

  return {
    setShowLoading,
    showLoading
  }
}
