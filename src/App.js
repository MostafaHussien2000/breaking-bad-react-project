import "./App.css";

/*React Router
=========================================*/
import { Switch, Route, BrowserRouter } from "react-router-dom";

/*Framer Motion
=========================================*/
import { AnimatePresence } from "framer-motion";

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
            <AnimatePresence initial={false} exitBeforeEnter>
              <LandingPage />
            </AnimatePresence>
          </Route>
          <Route path={["/characters/:id", "/characters"]} exact>
            <AnimatePresence initial={false} exitBeforeEnter>
              <CharactersPage />
            </AnimatePresence>
          </Route>
          <Route path="/quotes" exact>
            <AnimatePresence initial={false} exitBeforeEnter>
              <QuotesPage />
            </AnimatePresence>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
