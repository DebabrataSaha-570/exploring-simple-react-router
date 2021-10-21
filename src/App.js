import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div >

      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/friends">
            <Friends></Friends>

          </Route>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="*">
            <NotFound></NotFound>

          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
