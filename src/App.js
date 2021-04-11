import style from "./App.module.css";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navbar";
import Cart from "./pages/Cart";
import Formular from "./pages/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={style.App}>
      <Router>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/formular">
              <Formular />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
