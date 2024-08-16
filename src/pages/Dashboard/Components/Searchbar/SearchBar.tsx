import { HiRefresh } from "react-icons/hi";
import * as S from "./SearchBar.styles";
import { Button, TextField } from "~/components";
import { ChangeEvent } from "react";
import { Mask } from "~/utils";

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
      onMask={Mask.cpfMask}
      onChange={onFilterByCpf}
      maxLength={14}
      label="Filtrar por CPF"
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
