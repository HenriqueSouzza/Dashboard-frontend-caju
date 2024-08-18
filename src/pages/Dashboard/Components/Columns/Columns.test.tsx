import { render } from '@testing-library/react';
import { Columns } from './Columns';
import { StatusColumns } from '~/types';

describe('Columns', () => {
  const onClickAction = jest.fn();
  const onClickRemove = jest.fn();

  const props = {
    registrations: [
      {
        id: '2',
        employeeName: 'full name',
        email: 'email@gmail.com',
        admissionDate: '10/02/2012',
        status: StatusColumns.APPROVED,
        cpf: '01234567890',
        onClickAction,
        onClickRemove
      },
      {
        id: '3',
        employeeName: 'full name',
        email: 'email@gmail.com',
        admissionDate: '10/02/2012',
        status: StatusColumns.REVIEW,
        cpf: '01234567890',
        onClickAction,
        onClickRemove
      },
      {
        id: '4',
        employeeName: 'full name',
        email: 'email@gmail.com',
        admissionDate: '10/02/2012',
        status: StatusColumns.REPROVED,
        cpf: '01234567890',
        onClickAction,
        onClickRemove
      }
    ]
  };

  it('should check if card is in collumn correct', () => {
    const { getByTestId } = render(
      <Columns
        {...props}
      />
    );

    const columnsAprove = getByTestId(StatusColumns.APPROVED);
    expect(columnsAprove).toHaveTextContent('Aprovado');
    expect(columnsAprove).toHaveTextContent('Revisar novamente');
    expect(columnsAprove).not.toHaveTextContent('Reprovado');

    const columnsReview = getByTestId(StatusColumns.REVIEW);
    expect(columnsReview).toHaveTextContent('Aprovar');
    expect(columnsReview).toHaveTextContent('Reprovar');
    expect(columnsReview).not.toHaveTextContent('Revisar novamente');

    const columnsReprove = getByTestId(StatusColumns.REPROVED);
    expect(columnsReprove).toHaveTextContent('Revisar novamente');
    expect(columnsReprove).not.toHaveTextContent('Aprovar');
    expect(columnsReprove).not.toHaveTextContent('Reprovar');
  });
})