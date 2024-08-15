import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm'
  $bgcolor?: string
  $onlyicon?: boolean
  $variant?: 'default' | 'nobody'
}

export const Button = ({
  $variant = 'default',
  ...props
}: ButtonProps) => <S.Button $variant={$variant} {...props} />