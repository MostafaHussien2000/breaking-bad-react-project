import "./App.css";

/*React Router Stuff
=========================================*/
import { Switch, Route, BrowserRouter } from "react-router-dom";

/*React Components
=========================================*/
import Header from "./components/ui/Header";
import LandingPage from "./pages/LandingPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/characters" exact>
            <CharactersPage />
          </Route>
          <Route path="/episodes" exact>
            <EpisodesPage />
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
