import { useDashboard } from "~/hooks";
import * as S from "./styles";
import { Columns, SearchBar } from "./Components";

export const Dashboard = () => {
  const {
    onFilterByCpf,
    goToNewAdmissionPage,
    refreshPage,
    registrationsCard,
  } = useDashboard();

  return (
    <S.Container>
      <SearchBar
        onFilterByCpf={onFilterByCpf}
        onClickRefresh={refreshPage}
        onClickNewAdmissionPage={goToNewAdmissionPage}
      />
      <Columns registrations={registrationsCard} />
    </S.Container>
  );
}