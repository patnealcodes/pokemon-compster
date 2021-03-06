import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import { CompsterProvider } from './contexts/CompsterContext';

import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage from './pages/PokemonPage';
import TeamsPage from './pages/TeamsPage';

const App = () => {
  return (
    <Router>
      <CompsterProvider>
        <>
          <Header />
          <div style={{ margin: '56px 0 0', padding: '10px' }}>
            <Switch>
              <Route path="/pokedex" component={PokedexPage} />
              <Route path="/pokemon/:id" component={PokemonPage} />
              <Route path="/Teams" component={TeamsPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </>
      </CompsterProvider>
    </Router>
  );
}

export default App;
