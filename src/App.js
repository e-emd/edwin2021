import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
