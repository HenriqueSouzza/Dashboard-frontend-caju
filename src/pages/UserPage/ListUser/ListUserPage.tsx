import { useUserPage } from "~/hooks";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";
import { Columns } from "./components";

export const ListUserPage = () => {
  const {
    onFilterByCpf,
    goToNewAdmissionPage,
    refreshPage
  } = useUserPage();

  return (
    <S.Container>
      <SearchBar
        onFilterByCpf={onFilterByCpf}
        onClickRefresh={refreshPage}
        onClickNewAdmissionPage={goToNewAdmissionPage}
      />
      <Columns registrations={[{
        id: 1,
        employeeName: 'teste',
        email: 'teste@teste.com',
        admissionDate: '10/10/2020'
      }]} />
    </S.Container>
  );
}