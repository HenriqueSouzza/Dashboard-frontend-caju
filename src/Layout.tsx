import { Redirect, Route, Switch } from "react-router-dom";
import { Header, Main } from "./components";
import { Routes } from "./types";
import { ListUserPage, NewUserPage } from "./pages/UserPage";

function Layout() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Main>
        <Switch>
          <Route exact path={Routes.LIST_USER} component={ListUserPage} />
          <Route exact path={Routes.NEW_USER} component={NewUserPage} />
          <Route exact path="*">
            <Redirect to={Routes.LIST_USER} />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default Layout;
