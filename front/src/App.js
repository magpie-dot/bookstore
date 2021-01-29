import "./App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Cart from "./components/Cart";
import Formular from "./components/Formular/Formular";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navigation>
          <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/formular">
              <Formular />
            </Route>
          </Navigation>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
