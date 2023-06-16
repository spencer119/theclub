import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import SwimTeam from './components/SwimTeam';
import SwimLessons from './components/SwimLessons';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <NextUIProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/swimteam'>
            <SwimTeam />
          </Route>
          <Route exact path='/swimlessons'>
            <SwimLessons />
          </Route>
          <Route exact path='/swimlesson'>
            <SwimLessons />
          </Route>
        </Switch>
      </Router>
    </NextUIProvider>
  );
}

export default App;
