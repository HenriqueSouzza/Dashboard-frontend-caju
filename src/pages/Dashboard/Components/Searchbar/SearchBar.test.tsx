import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Mask } from '~/utils';

describe('SearchBar', () => {
  it('should check call', () => {
    const onClickNewAdmissionPage = jest.fn();
    const onClickRefresh = jest.fn();
    const onFilterByCpf = jest.fn();
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <SearchBar
        onClickNewAdmissionPage={onClickNewAdmissionPage}
        onClickRefresh={onClickRefresh}
        onFilterByCpf={onFilterByCpf}
      />
    );

    const btnNewAdmission = getByText('Nova Admissão');
    fireEvent.click(btnNewAdmission);
    expect(onClickNewAdmissionPage).toHaveBeenCalled();

    const cpf = '01234567890';
    const input = getByPlaceholderText('Digite um CPF válido');
    fireEvent.change(input, { target: { value: cpf } });

    expect(onFilterByCpf).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: Mask.cpfMask(cpf)
        })
      })
    );

    const btnRefresh = getByTestId('btn-refresh');
    fireEvent.click(btnRefresh);

    expect(onClickRefresh).toHaveBeenCalled();

  });
})