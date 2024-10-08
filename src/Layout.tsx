import { Redirect, Route, Switch } from "react-router-dom";
import { Header, Main } from "./components";
import { Routes } from "./types";
import { NewRegistrations, Dashboard } from "./pages";

function Layout() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Main>
        <Switch>
          <Route exact path={Routes.DASHBOARD} component={Dashboard} />
          <Route exact path={Routes.NEW_REGISTRATION} component={NewRegistrations} />
          <Route exact path="*">
            <Redirect to={Routes.DASHBOARD} />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default Layout;
