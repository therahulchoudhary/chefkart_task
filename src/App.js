import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import HomeContainer from './containers/HomeContainer'
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';

const App = () => {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
      <Bottombar />
    </Router>
  );
}

export default App;
