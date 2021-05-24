import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import HomeContainer from './containers/HomeContainer'
import Topbar from './components/Topbar';
import CustomFooter from './components/CustomFooter';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

const App = () => {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/form" component={FormContainer} />
        <Route path="/list" component={ListContainer} />
      </Switch>
      <CustomFooter />
    </Router>
  );
}

export default App;
