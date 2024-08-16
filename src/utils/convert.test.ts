import { Convert } from './convert';

const { convertDate } = Convert;

describe('Convert', () => {
  it('should convert to date ptBR', () => {
    expect(convertDate('2020-10-08')).toBe('08/10/2020');
  });
})