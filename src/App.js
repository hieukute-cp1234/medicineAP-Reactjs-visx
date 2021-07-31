import React, { lazy } from "react";
import Suspense from "./route/Suspense";
import PrivateRoute from "./route/privateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const WareHouseIngredient = lazy(() =>
  import("./page/warehouseIngredient/index")
);
const Login = lazy(() => import("./page/login/index"));
const Home = lazy(() => import("./page/home/index"));
const CreateProcess = lazy(() => import("./page/createProcess/index"));
const WareHouseProduct = lazy(() => import("./page/warehouseProduct/index"));
const ProductionPlan = lazy(() => import("./page/productionPlan/index"));
const Registration = lazy(() => import("./page/registration/index"));
const Recipe = lazy(() => import("./page/recipe/index"));
const DetailProcess = lazy(() => import("./page/detailProcess/index"));
const Profile = lazy(() => import("./page/profile/index"));
const Oder = lazy(() => import("./page/order/index"));

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/detail-process">
          <Suspense component={<DetailProcess />} />
        </PrivateRoute>
        <PrivateRoute path="/order">
          <Suspense component={<Oder />} />
        </PrivateRoute>
        <Route path="/login">
          <Suspense component={<Login />} />
        </Route>
        <Route path="/registration">
          <Suspense component={<Registration />} />
        </Route>
        <PrivateRoute path="/production-plan">
          <Suspense component={<ProductionPlan />} />
        </PrivateRoute>
        <PrivateRoute path="/recipe">
          <Suspense component={<Recipe />} />
        </PrivateRoute>
        <PrivateRoute path="/create-process">
          <Suspense component={<CreateProcess />} />
        </PrivateRoute>
        <PrivateRoute path="/ware-house-ingredient">
          <Suspense component={<WareHouseIngredient />} />
        </PrivateRoute>
        <PrivateRoute path="/ware-house-product">
          <Suspense component={<WareHouseProduct />} />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Suspense component={<Profile />} />
        </PrivateRoute>
        <Route path="/">
          <Suspense component={<Home />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
