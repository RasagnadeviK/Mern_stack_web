import GlobalStyle from './GlobalStyle';
import { Switch, Route } from 'react-router-dom';

// Pages
import { Home } from './Pages/Home/Home';
import { Success } from './Pages/Success/Success';
import { Error } from './Pages/404/404';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Success} path='/success' />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
