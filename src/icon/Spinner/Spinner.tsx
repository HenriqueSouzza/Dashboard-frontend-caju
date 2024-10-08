import * as S from './Spinner.styles';

export const Spinner = () => (
  <S.Spinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </S.Spinner>
);