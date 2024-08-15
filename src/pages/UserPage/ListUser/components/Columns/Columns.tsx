
import * as S from "./styles";
import RegistrationCard, { RegistrationCardProps } from "../RegistrationCard/RegistrationCard";
import { StatusColumns } from "~/types";

interface CollumnsProps {
  registrations?: RegistrationCardProps[];
};

const ListColumns = [
  { status: StatusColumns.REVIEW, title: "Pronto para revisar" },
  { status: StatusColumns.APPROVED, title: "Aprovado" },
  { status: StatusColumns.REPROVED, title: "Reprovado" },
];

export const Columns = ({ registrations }: CollumnsProps) => (
  <S.Container>
    {ListColumns.map((column: { status: StatusColumns, title: string }) => (
      <S.Column $status={column.status} key={column.title}>
        <S.TitleColumn $status={column.status}>
          {column.title}
        </S.TitleColumn>
        <S.CollumContent>
          {registrations?.map((registration: RegistrationCardProps) => registration.status === column.status && (
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
