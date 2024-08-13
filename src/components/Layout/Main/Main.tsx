import { HTMLAttributes } from 'react';
import * as S from './Main.styles';

interface MainProps extends HTMLAttributes<HTMLElement> { }

export const Main = (props: MainProps) => <S.Main {...props} />