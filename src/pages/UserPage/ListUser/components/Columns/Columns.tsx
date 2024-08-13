
import * as S from "./styles";
import RegistrationCard, { RegistrationCardProps } from "../RegistrationCard";
import { StatusColumns } from "./Columns.types";

interface CollumnsProps {
  registrations?: RegistrationCardProps[];
};

export const Columns = ({ registrations }: CollumnsProps) => {
  const allColumns = [
    { status: StatusColumns.REVIEW, title: "Pronto para revisar" },
    { status: StatusColumns.APPROVED, title: "Aprovado" },
    { status: StatusColumns.REPROVED, title: "Reprovado" },
  ];

  return (
    <S.Container>
      {allColumns.map((column: { status: StatusColumns, title: string }) => (
        <S.Column status={column.status} key={column.title}>
          <S.TitleColumn status={column.status}>
            {column.title}
          </S.TitleColumn>
          <S.CollumContent>
            {registrations?.map((registration: RegistrationCardProps) => (
              <RegistrationCard
                {...registration}
                key={registration.id}
              />
            ))}
          </S.CollumContent>
        </S.Column>
      ))}
    </S.Container>
  );
};
