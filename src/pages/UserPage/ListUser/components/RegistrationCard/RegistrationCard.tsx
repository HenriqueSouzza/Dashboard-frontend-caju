import { Button } from "~/components";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { RegistrationsProps, StatusColumns } from "~/types";

export interface RegistrationCardProps extends RegistrationsProps {
  onClickAction: (item: RegistrationsProps) => void
  onClickRemove: (id: string) => void
}

const RegistrationCard = ({
  id,
  employeeName,
  email,
  admissionDate,
  status,
  cpf,
  onClickAction,
  onClickRemove,
}: RegistrationCardProps) => {
  const registrationsData = {
    id,
    employeeName,
    email,
    admissionDate,
    status,
    cpf,
  };

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {status === StatusColumns.REVIEW && (
          <>
            <Button
              onClick={() => onClickAction({ ...registrationsData, status: StatusColumns.REPROVED })}
              size="sm"
              $bgcolor="rgb(255, 145, 154)"
            >
              Reprovar
            </Button>
            <Button
              onClick={() => onClickAction({ ...registrationsData, status: StatusColumns.APPROVED })}
              size="sm"
              $bgcolor="rgb(155, 229, 155)"
            >
              Aprovar
            </Button>
          </>
        )}
        {(status === StatusColumns.APPROVED || status === StatusColumns.REPROVED) && (
          <Button
            onClick={() => onClickAction({ ...registrationsData, status: StatusColumns.REVIEW })}
            size="sm"
            $bgcolor="#ff8858"
          >
            Revisar novamente
          </Button >
        )}
        <Button
          size="sm"
          $variant="nobody"
          onClick={() => onClickRemove(id!)}>
          <HiOutlineTrash size={15} />
        </Button>
      </S.Actions>
    </S.Card>
  )
};

export default RegistrationCard;
