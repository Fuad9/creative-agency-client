import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../../components/pages/Dashboard/Dashboard/Dashboard";
import CustomerOrder from "../pages/Dashboard/Customers/CustomerOrder/CustomerOrder";
import CustomerServiceList from "../pages/Dashboard/Customers/CustomerServiceList/CustomerServiceList";
import OrdersData from "../pages/Dashboard/Admins/OrdersData/OrdersData";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import AddService from "../pages/Dashboard/Admins/AddService/AddService";
import MakeAdmin from "../pages/Dashboard/Admins/MakeAdmin/MakeAdmin";
import CustomerReview from "../pages/Dashboard/Customers/CustomerReview/CustomerReview";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/order">
          <CustomerOrder />
        </PrivateRoute>
        <PrivateRoute path="/customerService">
          <CustomerServiceList />
        </PrivateRoute>
        <PrivateRoute path="/addReview">
          <CustomerReview />
        </PrivateRoute>
        <PrivateRoute path="/allServices">
          <OrdersData />
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService />
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin />
        </PrivateRoute>
        <Route exact path="/" component={Home} />;
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
