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
      <Friends></Friends>
    </div>
  );
}

export default App;
