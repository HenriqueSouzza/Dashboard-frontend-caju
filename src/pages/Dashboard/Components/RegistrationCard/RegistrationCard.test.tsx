import { fireEvent, render } from '@testing-library/react';
import { RegistrationCard } from './RegistrationCard';
import { StatusColumns } from '~/types';

describe('RegistrationCard', () => {
  const props = {
    id: '1',
    employeeName: 'full name',
    email: 'email@gmail.com',
    admissionDate: '10/02/2012',
    status: StatusColumns.APPROVED,
    cpf: '01234567890',
  };

  it('should call id when click at remove button', () => {
    const onClickAction = jest.fn();
    const onClickRemove = jest.fn();
    const { getByTestId } = render(
      <RegistrationCard
        {...props}
        onClickRemove={onClickRemove}
        onClickAction={onClickAction}
      />
    );

    const buttonRemove = getByTestId('btn-remove');
    fireEvent.click(buttonRemove);

    expect(onClickRemove).toHaveBeenCalledWith(props.id);
  });

  it('should call data with status reprove or aprove when status is review', () => {
    const onClickAction = jest.fn();
    const onClickRemove = jest.fn();
    props.status = StatusColumns.REVIEW
    const { getByText, queryByText } = render(
      <RegistrationCard
        {...props}
        onClickRemove={onClickRemove}
        onClickAction={onClickAction}
      />
    );

    const buttonReprove = getByText('Reprovar');
    fireEvent.click(buttonReprove);
    expect(onClickAction).toHaveBeenCalledWith({ ...props, status: StatusColumns.REPROVED });

    const buttonAprove = getByText('Aprovar');
    fireEvent.click(buttonAprove);
    expect(onClickAction).toHaveBeenCalledWith({ ...props, status: StatusColumns.APPROVED });

    const buttonReviewTry = queryByText('Revisar novamente');
    expect(buttonReviewTry).toBeNull();
  });

  it('should call data with status reprove or aprove when status is aprove', () => {
    const onClickAction = jest.fn();
    const onClickRemove = jest.fn();
    props.status = StatusColumns.APPROVED
    const { getByText, queryByText } = render(
      <RegistrationCard
        {...props}
        onClickRemove={onClickRemove}
        onClickAction={onClickAction}
      />
    );

    const buttonReviewTry = getByText('Revisar novamente');
    fireEvent.click(buttonReviewTry);
    expect(onClickAction).toHaveBeenCalledWith({ ...props, status: StatusColumns.REVIEW });

    const buttonAprove = queryByText('Aprovar');
    const buttonReprove = queryByText('Reprovar');
    expect(buttonAprove).toBeNull();
    expect(buttonReprove).toBeNull();
  });

  it('should check call when status is reprove', () => {
    const onClickAction = jest.fn();
    const onClickRemove = jest.fn();
    props.status = StatusColumns.REPROVED
    const { getByText, queryByText } = render(
      <RegistrationCard
        {...props}
        onClickRemove={onClickRemove}
        onClickAction={onClickAction}
      />
    );

    const buttonRReviewTry = getByText('Revisar novamente');
    fireEvent.click(buttonRReviewTry);
    expect(onClickAction).toHaveBeenCalledWith({ ...props, status: StatusColumns.REVIEW });

    const buttonAprove = queryByText('Aprovar');
    const buttonReprove = queryByText('Reprovar');
    expect(buttonAprove).toBeNull();
    expect(buttonReprove).toBeNull();
  });
})