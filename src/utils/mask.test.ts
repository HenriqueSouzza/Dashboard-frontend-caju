import { Mask } from './mask';

const { cpfMask } = Mask;

describe('Mask', () => {
  it('should add mask cpf at string', () => {
    expect(cpfMask('01234567890')).toBe('012.345.678-90');
  });

  it('should add mask cpf at string masked', () => {
    expect(cpfMask('012.345.678-90')).toBe('012.345.678-90');
  });
})