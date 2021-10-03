import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
