import { HiRefresh } from "react-icons/hi";
import * as S from "./SearchBar.styles";
import { Button, TextField } from "~/components";
import { ChangeEvent } from "react";

interface SearchBarProps {
  onClickRefresh: () => void
  onClickNewAdmissionPage: () => void
  onFilterByCpf: (value: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({
  onClickNewAdmissionPage,
  onClickRefresh,
  onFilterByCpf,
}: SearchBarProps) => (
  <S.Container>
    <TextField
      name="cpf"
      onChange={onFilterByCpf}
      aria-placeholder="Digite um CPF válido"
      placeholder="Digite um CPF válido"
    />
    <S.Actions>
      <Button
        onClick={onClickRefresh}
        size="sm"
        $onlyicon
        aria-label="refetch">
        <HiRefresh />
      </Button>
      <Button onClick={onClickNewAdmissionPage}>Nova Admissão</Button>
    </S.Actions>
  </S.Container>
);
