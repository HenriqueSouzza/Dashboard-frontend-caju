import { Controller } from "react-hook-form";
import * as S from "./styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Button, TextField } from "~/components";
import { useNewUserPage } from "~/hooks";
import { Mask } from "~/utils";

export const NewUserPage = () => {
  const {
    goToHome,
    onSubmit,
    control,
    validate: {
      cpf,
      email,
      employeeName,
      required
    }
  } = useNewUserPage();

  return (
    <S.Container>
      <S.Card>
        <S.Form onSubmit={onSubmit}>
          <Button size="sm" $onlyicon onClick={goToHome} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </Button>
          <Controller
            name={"employeeName"}
            control={control}
            rules={{
              required,
              validate: employeeName
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                {...field}
                error={error}
                placeholder="Nome"
                label="Nome"
              />
            )}
          />
          <Controller
            name={"email"}
            control={control}
            rules={{
              required,
              validate: email
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                {...field}
                error={error}
                placeholder="Email"
                label="Email"
              />
            )}
          />
          <Controller
            name={"cpf"}
            control={control}
            rules={{
              required,
              validate: cpf
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                {...field}
                error={error}
                placeholder="CPF"
                label="CPF"
                maxLength={14}
                onMask={Mask.cpfMask}
              />
            )}
          />
          <Controller
            name={"admissionDate"}
            control={control}
            rules={{
              required,
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="date"
                {...field}
                error={error}
                label="Date de admissao"
              />
            )}
          />
          <Button type="submit">
            Cadastrar
          </Button>
        </S.Form>
      </S.Card>
    </S.Container>
  )
};