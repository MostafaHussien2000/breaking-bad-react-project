import "./App.css";

/*React Router Stuff
=========================================*/
import { Switch, Route, BrowserRouter } from "react-router-dom";

/*React Components
=========================================*/
import LandingPage from "./pages/LandingPage";
import CharactersPage from "./pages/CharactersPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path={["/characters/:id", "/characters"]} exact>
            <CharactersPage />
          </Route>
          <Route path="/quotes" exact>
            <QuotesPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
