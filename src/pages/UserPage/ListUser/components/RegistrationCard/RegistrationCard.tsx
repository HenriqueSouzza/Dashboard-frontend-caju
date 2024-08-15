import { Button } from "~/components";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { StatusColumns } from "~/types";

export interface RegistrationCardProps {
  id: number
  employeeName: string
  email: string
  admissionDate: string
  status: StatusColumns
  onClickAction: (item: string, status: StatusColumns) => void
  onClickRemove: (item: string) => void
}

const RegistrationCard = ({
  employeeName,
  email,
  admissionDate,
  status,
  onClickAction,
  onClickRemove,
}: RegistrationCardProps) => (
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
            onClick={() => onClickAction('', StatusColumns.REPROVED)}
            size="sm"
            $bgcolor="rgb(255, 145, 154)"
          >
            Reprovar
          </Button>
          <Button
            onClick={() => onClickAction('', StatusColumns.APPROVED)}
            size="sm"
            $bgcolor="rgb(155, 229, 155)"
          >
            Aprovar
          </Button>
        </>
      )}
      {(status === StatusColumns.APPROVED || status === StatusColumns.REPROVED) && (
        <Button
          onClick={() => onClickAction('', StatusColumns.REVIEW)}
          size="sm"
          $bgcolor="#ff8858"
        >
          Revisar novamente
        </Button >
      )}
      <Button
        size="sm"
        $variant="nobody"
        onClick={() => onClickRemove('')}>
        <HiOutlineTrash />
      </Button>
    </S.Actions>
  </S.Card>
);

export default RegistrationCard;
