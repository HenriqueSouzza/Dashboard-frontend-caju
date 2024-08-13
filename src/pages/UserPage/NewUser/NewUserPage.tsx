import * as S from "./styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Button, TextField } from "~/components";
import { useUserPage } from "~/hooks";

export const NewUserPage = () => {
  const { goToHome, onSubmitNewUser } = useUserPage();

  return (
    <S.Container>
      <S.Card>
        <S.Form onSubmit={onSubmitNewUser}>
          <Button size="sm" $onlyicon onClick={goToHome} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </Button>
          <TextField
            type="text"
            name="name"
            placeholder="Nome"
            label="Nome"
          />
          <TextField
            type="text"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <TextField
            type="text"
            name="cpf"
            placeholder="CPF"
            label="CPF"
          />
          <TextField
            name="admissionDate"
            label="Data de admissão"
            type="date"
          />
          <Button type="submit">
            Cadastrar
          </Button>
        </S.Form>
      </S.Card>
    </S.Container>
  )
};