import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div >
      <Home></Home>
      <Friends></Friends>
      <About></About>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
