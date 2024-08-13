import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import * as S from './TextField.styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  $error?: {
    hasError: boolean
    message: string
  }
}

export const TextField = ({
  id,
  label,
  $error,
  onChange,
  ...props
}: TextFieldProps) => {
  const [error, setError] = useState<boolean>(!!$error?.hasError);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    onChange && onChange(e)
  }

  return (
    <S.Field $error={error}>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input onChange={handleChange} {...props} id={id} />
      {error && (
        <S.Message>{$error?.message}</S.Message>
      )}
    </S.Field>
  );
};