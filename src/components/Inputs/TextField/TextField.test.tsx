import { fireEvent, render } from '@testing-library/react';
import { TextField } from './TextField';
import { Mask } from '~/utils';

describe('TextField', () => {
  const props = {
    name: 'cpf',
    placeholder: 'digite aqui',
    error: {
      message: ''
    }
  }

  it('should show error', () => {
    props.error = {
      message: 'documento invalido'
    };

    const { getByText } = render(<TextField {...props} />);
    const errorLabel = getByText(props.error.message);
    expect(errorLabel).toBeInTheDocument();
  });

  it('should call text masked', () => {
    const onMask = Mask.cpfMask;
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField
        onChange={onChange}
        onMask={onMask}
        {...props}
      />
    );
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: '01234567890' } })

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: Mask.cpfMask('01234567890')
        })
      })
    );
  });
})