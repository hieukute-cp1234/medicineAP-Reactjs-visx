import './App.css';
import Login from './page/login';
import Registration from './page/registration';
import Home from './page/home';
import Recipe from './page/recipe';
import StepsConstructive from './page/steps-constructive';
import WareHouseIngredient from './page/warehouse-ingredient'
import WareHouseProduct from './page/warehouse-product'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/recipe'>
            <Recipe />
          </Route>
          <Route path='/steps-constructive'>
            <StepsConstructive />
          </Route>
          <Route path='/ware-house-ingredient'>
            <WareHouseIngredient />
          </Route>
          <Route path='/ware-house-product'>
            <WareHouseProduct />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
