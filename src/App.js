import React, { lazy } from 'react'
import Suspense from './route/Suspense';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const WareHouseIngredient = lazy(() => import('./page/warehouseIngredient/index'));
const Login = lazy(() => import('./page/login/index'));
const Home = lazy(() => import('./page/home/index'));
const CreateProcess = lazy(() => import('./page/createProcess/index'));
const WareHouseProduct = lazy(() => import('./page/warehouseProduct/index'));
const ProductionPlan = lazy(() => import('./page/productionPlan/index'));
const Registration = lazy(() => import('./page/registration/index'));
const Recipe = lazy(() => import('./page/recipe/index'));
const DetailProcess = lazy(() => import('./page/detailProcess/index'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/detail-process'>
          <Suspense component={<DetailProcess />} />
        </Route>
        <Route path='/login'>
          <Suspense component={<Login />} />
        </Route>
        <Route path='/registration'>
          <Suspense component={<Registration />} />
        </Route>
        <Route path='/production-plan'>
          <Suspense component={<ProductionPlan />} />
        </Route>
        <Route path='/recipe'>
          <Suspense component={<Recipe />} />
        </Route>
        <Route path='/create-process'>
          <Suspense component={<CreateProcess />} />
        </Route>
        <Route path='/ware-house-ingredient'>
          <Suspense component={<WareHouseIngredient />} />
        </Route>
        <Route path='/ware-house-product'>
          <Suspense component={<WareHouseProduct />} />
        </Route>
        <Route path='/'>
          <Suspense component={<Home />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
