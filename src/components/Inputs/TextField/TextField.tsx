import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import * as S from './TextField.styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  error?: {
    message?: string
  }
  onMask?: (value: string) => string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  id,
  label,
  error,
  onChange,
  onMask,
  ...props
}: TextFieldProps, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onMask) {
      e.target.value = onMask(e.target.value);
    }

    onChange && onChange(e);
  }

  return (
    <S.Field $error={error?.message}>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        id={id}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
      {error?.message && (
        <S.Message>{error.message}</S.Message>
      )}
    </S.Field>
  )
});