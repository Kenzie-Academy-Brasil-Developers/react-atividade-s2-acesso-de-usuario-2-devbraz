import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Customer from './components/pages/customer';
import Company from './components/pages/company';
import Home from './components/home/home';
import { members } from './array';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members}/>
          </Route>
          <Route path="/customer/:id">
            <Customer members={members}/>
          </Route>
          <Route path="/company/:id">
            <Company members={members}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
