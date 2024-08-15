import { useUserPage } from "~/hooks";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";
import { Columns } from "./components";

export const ListUserPage = () => {
  const {
    onFilterByCpf,
    goToNewAdmissionPage,
    refreshPage,
    registrationsCard,
  } = useUserPage();

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