import { renderHook } from "@testing-library/react"
import { useDashboard } from "~/hooks"
import { useHistory } from "react-router-dom";
import { act } from "react";

describe('useDashboard', () => {
  const useHistoryMock = (useHistory as jest.Mock);
  const pathExpected = jest.fn();

  it('should redirect to page create new admission', () => {
    useHistoryMock.mockReturnValue({ push: pathExpected })

    const { result } = renderHook(() => useDashboard());

    act(() => {
      result.current.goToNewAdmissionPage();
    })

    expect(pathExpected).toHaveBeenCalledWith('/new-registration');
  });
})