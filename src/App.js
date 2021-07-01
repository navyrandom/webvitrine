import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Presentation from './components/Presentation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path='/' render= {() => <Home />} />
      <Route exact path='/contact' render={() => <Contact />} />
      <Route exact path='/presentation' render={() => <Presentation />} />
    </Switch>
    </Router>
    </>
  ) ;
}

export default App;
