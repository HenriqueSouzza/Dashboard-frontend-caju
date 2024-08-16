import { Validations } from "./validations";

const { IsFullName, isEmailValid, isCpfValid, isNotEmpty } = Validations;

describe('Mask', () => {
  it('should check if name is complete', () => {
    expect(IsFullName('nome sobrenome')).toBeTruthy();
    expect(IsFullName(' nomesobrenome')).toBeFalsy();
    expect(IsFullName('1nomesobrenome')).toBeFalsy();
    expect(IsFullName('1 nomesobrenome')).toBeFalsy();
    expect(IsFullName('nomesobrenome ')).toBeFalsy();
  });

  it('should check if email is valid', () => {
    expect(isEmailValid('teste@teste.com')).toBeTruthy();
    expect(isEmailValid(' teste@teste.com')).toBeTruthy();
    expect(isEmailValid('+teste@teste.com')).toBeTruthy();
    expect(isEmailValid('1teste@teste.com')).toBeTruthy();
    expect(isEmailValid('1teste@teste')).toBeFalsy();
    expect(isEmailValid('1testeteste.com')).toBeFalsy();
  });

  it('should check if cpf is valid', () => {
    expect(isCpfValid('01234567890')).toBeTruthy();
    expect(isCpfValid('012.345.678.90')).toBeTruthy();
    expect(isCpfValid('012.345.678.00')).toBeFalsy();
    expect(isCpfValid('00000000000')).toBeFalsy();
  });

  it('should check if string is filled', () => {
    expect(isNotEmpty('')).toBeFalsy();
    expect(isNotEmpty(' ')).toBeFalsy();
    expect(isNotEmpty('a')).toBeTruthy();
    expect(isNotEmpty('1')).toBeTruthy();
    expect(isNotEmpty('1 ')).toBeTruthy();
  });
})