import { Button } from "~/components";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";

export interface RegistrationCardProps {
  id: number
  employeeName: string
  email: string
  admissionDate: string
  actions?: {
    onClickDisapprove: (value: any) => void
    onClickApprove: (value: any) => void
    onClickReviewTry: (value: any) => void
    onClickRemove: (value: any) => void
  }
}

const RegistrationCard = ({ employeeName, email, admissionDate, actions }: RegistrationCardProps) => {
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
        <Button
          onClick={actions?.onClickApprove}
          size="sm"
          bgcolor="rgb(255, 145, 154)"
        >
          Reprovar
        </Button>
        <Button
          onClick={actions?.onClickDisapprove}
          size="sm"
          bgcolor="rgb(155, 229, 155)"
        >
          Aprovar
        </Button>
        <Button
          onClick={actions?.onClickReviewTry}
          size="sm"
          bgcolor="#ff8858"
        >
          Revisar novamente
        </Button>
        <Button
          size="sm"
          variant="nobody"
          onClick={actions?.onClickReviewTry}>
          <HiOutlineTrash />
        </Button>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
