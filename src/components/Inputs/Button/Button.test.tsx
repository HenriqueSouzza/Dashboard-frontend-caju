import { fireEvent, render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should call event when click', () => {
    const onClick = jest.fn();
    const label = 'button';
    const { getByText } = render(
      <Button onClick={onClick}>
        {label}
      </Button>
    );
    const button = getByText(label);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
})