import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Metronome from './components/Metronome';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/metronome'>
            <Metronome />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
