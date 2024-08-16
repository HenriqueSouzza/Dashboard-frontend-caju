import { fireEvent, render } from '@testing-library/react';
import { Modal } from './Modal';

describe('Button', () => {
  const title = 'Modal';

  it('should show screen', () => {
    const { getByText } = render(
      <Modal open title={title} />
    )

    expect(getByText(title)).toBeInTheDocument();
  });

  it('shouldn"t show screen', () => {
    const { queryByText } = render(
      <Modal title={title} />
    )

    expect(queryByText(title)).toBeNull();
  });

  it('should call when click confirm or hide', () => {
    const onClickHide = jest.fn();
    const onClickConfirm = jest.fn();
    const confirmLabel = 'confirmar';
    const hideLabel = 'close';

    const { getByText } = render(
      <Modal
        open
        title={title}
        confirmLabel={confirmLabel}
        hideLabel={hideLabel}
        onClickHide={onClickHide}
        onClickConfirm={onClickConfirm}
      />
    )

    fireEvent.click(getByText(confirmLabel));
    fireEvent.click(getByText(hideLabel));

    expect(onClickConfirm).toHaveBeenCalled();
    expect(onClickHide).toHaveBeenCalled();
  });
})